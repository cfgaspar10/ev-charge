/**
 * Emulador do SDK Google Apps Script e Adaptador REST para EV Charging Calculator
 * Permite que a aplicação funcione desacoplada do ecossistema Google Apps Script.
 */
(function () {
  'use strict';

  // Detecção dinâmica de subcaminho (/app, /app-hml ou raiz)
  function getContextBasePath() {
    if (window.location.pathname.startsWith('/app-hml')) return '/app-hml';
    if (window.location.pathname.startsWith('/app')) return '/app';
    return '';
  }

  const API_BASE = getContextBasePath() + '/api';

  async function fetchAPI(endpoint, options = {}) {
    const response = await fetch(API_BASE + endpoint, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {})
      },
      credentials: 'include'
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err.erro || err.message || 'Erro HTTP ' + response.status);
    }
    return response.json();
  }

  // Encapsulamento fluente compatível com withSuccessHandler e withFailureHandler
  class GASRunner {
    constructor() {
      this._success = () => {};
      this._failure = (err) => console.error('Erro na requisição da API:', err);
    }

    withSuccessHandler(fn) {
      this._success = fn;
      return this;
    }

    withFailureHandler(fn) {
      this._failure = fn;
      return this;
    }

    // Mapeamento da função do antigo veiculos.js / Code.gs
    obterListaVeiculos() {
      fetchAPI('/veiculos')
        .then(res => this._success(res))
        .catch(err => {
          console.warn('Falha ao carregar veículos via API REST, mantendo base padrão local:', err);
          this._failure(err);
        });
    }

    // Extensibilidade futura: salvar ou carregar simulações
    salvarSimulacao(payload) {
      fetchAPI('/simulacoes', { method: 'POST', body: JSON.stringify(payload) })
        .then(res => this._success(res))
        .catch(err => this._failure(err));
    }
  }

  // Interceptador global window.google.script.run
  window.google = {
    script: {
      run: new Proxy({}, {
        get: (target, prop) => {
          return (...args) => {
            const runner = new GASRunner();
            setTimeout(() => {
              if (typeof runner[prop] === 'function') {
                runner[prop](...args);
              } else {
                console.warn(`Método ${prop} não mapeado no api.js`);
              }
            }, 0);
            return runner;
          };
        }
      })
    }
  };
})();
