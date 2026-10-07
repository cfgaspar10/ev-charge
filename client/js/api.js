/**
 * Emulador do SDK Google Apps Script e Adaptador REST para EV Charging Calculator
 * Permite que a aplicação funcione desacoplada do ecossistema Google Apps Script
 * e oferece métodos de administração para cadastro e gestão de veículos.
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

  function getStoredAdminKey() {
    return sessionStorage.getItem('ev_admin_key') || localStorage.getItem('ev_admin_key') || '';
  }

  function setStoredAdminKey(key, persist = false) {
    if (persist) {
      localStorage.setItem('ev_admin_key', key);
    } else {
      sessionStorage.setItem('ev_admin_key', key);
    }
  }

  function clearStoredAdminKey() {
    sessionStorage.removeItem('ev_admin_key');
    localStorage.removeItem('ev_admin_key');
  }

  async function fetchAPI(endpoint, options = {}) {
    const headers = {
      'Content-Type': 'application/json',
      ...(options.headers || {})
    };

    const adminKey = options.adminKey || getStoredAdminKey();
    if (adminKey && !headers['x-admin-key']) {
      headers['x-admin-key'] = adminKey;
    }

    const response = await fetch(API_BASE + endpoint, {
      ...options,
      headers,
      credentials: 'include'
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err.erro || err.mensagem || err.message || 'Erro HTTP ' + response.status);
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

    // Cadastro de veículo via admin
    cadastrarVeiculo(payload) {
      fetchAPI('/veiculos', { method: 'POST', body: JSON.stringify(payload) })
        .then(res => this._success(res))
        .catch(err => this._failure(err));
    }
  }

  // API Moderna acessível globalmente
  window.EV_API = {
    getAdminKey: getStoredAdminKey,
    setAdminKey: setStoredAdminKey,
    clearAdminKey: clearStoredAdminKey,
    hasAdminKey: () => Boolean(getStoredAdminKey()),

    async verificarAdmin(key) {
      const chave = key || getStoredAdminKey();
      return fetchAPI('/veiculos/admin/verificar', {
        method: 'POST',
        headers: { 'x-admin-key': chave }
      });
    },

    async listarVeiculos(incluirInativos = false) {
      const query = incluirInativos ? '?todos=true' : '';
      return fetchAPI('/veiculos' + query);
    },

    async obterVeiculo(id) {
      return fetchAPI(`/veiculos/${encodeURIComponent(id)}`);
    },

    async cadastrarVeiculo(dados, adminKey) {
      return fetchAPI('/veiculos', {
        method: 'POST',
        body: JSON.stringify(dados),
        adminKey
      });
    },

    async atualizarVeiculo(id, dados, adminKey) {
      return fetchAPI(`/veiculos/${encodeURIComponent(id)}`, {
        method: 'PUT',
        body: JSON.stringify(dados),
        adminKey
      });
    },

    async desativarVeiculo(id, adminKey, permanente = false) {
      const query = permanente ? '?permanente=true' : '';
      return fetchAPI(`/veiculos/${encodeURIComponent(id)}${query}`, {
        method: 'DELETE',
        adminKey
      });
    },

    // Métodos de Solicitação / Sugestão de novos veículos
    async enviarSolicitacao(dados) {
      return fetchAPI('/solicitacoes', {
        method: 'POST',
        body: JSON.stringify(dados)
      });
    },

    async listarSolicitacoes(status = '', adminKey) {
      const query = status ? `?status=${encodeURIComponent(status)}` : '';
      return fetchAPI('/solicitacoes' + query, {
        method: 'GET',
        adminKey
      });
    },

    async contarSolicitacoesPendentes(adminKey) {
      return fetchAPI('/solicitacoes/contagem-pendentes', {
        method: 'GET',
        adminKey
      });
    },

    async atualizarStatusSolicitacao(id, status, adminNotes = '', adminKey) {
      return fetchAPI(`/solicitacoes/${encodeURIComponent(id)}`, {
        method: 'PUT',
        body: JSON.stringify({ status, adminNotes }),
        adminKey
      });
    },

    async excluirSolicitacao(id, adminKey) {
      return fetchAPI(`/solicitacoes/${encodeURIComponent(id)}`, {
        method: 'DELETE',
        adminKey
      });
    },

    // Métodos de Sincronização com eletricos.app
    async verificarSync(adminKey) {
      return fetchAPI('/sync/verificar', {
        method: 'POST',
        adminKey
      });
    },

    async executarSyncStream(veiculos, onProgresso, onConcluido, onErro, adminKey) {
      const chave = adminKey || getStoredAdminKey();
      try {
        const response = await fetch(API_BASE + '/sync/executar', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-admin-key': chave
          },
          body: JSON.stringify({ veiculos })
        });

        if (!response.ok) {
          const err = await response.json().catch(() => ({}));
          throw new Error(err.erro || 'Erro ao iniciar sincronização.');
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder('utf-8');
        let buffer = '';

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });

          const lines = buffer.split('\n\n');
          buffer = lines.pop(); // Mantém o pedaço incompleto

          for (const bloco of lines) {
            if (!bloco.trim()) continue;
            const eventMatch = bloco.match(/^event:\s*([a-zA-Z0-9_-]+)/m);
            const dataMatch = bloco.match(/^data:\s*(.+)$/m);
            const eventType = eventMatch ? eventMatch[1] : 'message';
            let data = {};
            try {
              if (dataMatch) data = JSON.parse(dataMatch[1]);
            } catch (e) {}

            if (eventType === 'progresso' && onProgresso) {
              onProgresso(data);
            } else if (eventType === 'fim' && onConcluido) {
              onConcluido(data);
            } else if (eventType === 'erro' && onErro) {
              onErro(data);
            }
          }
        }
      } catch (err) {
        if (onErro) onErro({ mensagem: err.message });
      }
    }
  };

  // Interceptador global window.google.script.run (Compatibilidade retroativa)
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
