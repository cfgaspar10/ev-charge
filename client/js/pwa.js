// ==============================================================================
// kWhub - Integração PWA no Frontend
// Registro de Service Worker, Prompt de Instalação e Notificações
// Suporte Completo: Android, Apple (iOS/iPadOS/macOS) e Desktop
// Compatível com Raiz (PROD) e Subcaminhos de Proxy Reverso (HML /app-hml e /app)
// ==============================================================================

(function () {
  'use strict';

  let deferredInstallPrompt = null;

  function getContextBasePath() {
    if (window.location.pathname.startsWith('/kwhub-hml')) return '/kwhub-hml';
    if (window.location.pathname.startsWith('/kwhub')) return '/kwhub';
    if (window.location.pathname.startsWith('/ev-calculator')) return '/ev-calculator';
    if (window.location.pathname.startsWith('/app-hml')) return '/app-hml';
    if (window.location.pathname.startsWith('/app')) return '/app';
    const redirect = new URLSearchParams(window.location.search).get('redirect');
    if (redirect && redirect.startsWith('/kwhub-hml')) return '/kwhub-hml';
    if (redirect && redirect.startsWith('/kwhub')) return '/kwhub';
    if (redirect && redirect.startsWith('/ev-calculator')) return '/ev-calculator';
    if (redirect && redirect.startsWith('/app-hml')) return '/app-hml';
    if (redirect && redirect.startsWith('/app')) return '/app';
    return '';
  }

  function atualizarBotoesInstalacao(visivel) {
    const ids = ['btn-instalar-pwa', 'btn-instalar-pwa-header'];
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.style.display = visivel ? 'inline-flex' : 'none';
      }
    });
  }

  // 1. Detecção de Plataforma
  const isIOS = () => {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  };

  const isStandalone = () => {
    return window.matchMedia('(display-mode: standalone)').matches ||
           window.navigator.standalone === true ||
           document.referrer.includes('android-app://');
  };

  // 2. Registro do Service Worker com escopo dinâmico
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      const basePath = getContextBasePath();
      const swUrl = (basePath || '') + '/sw.js';
      const swOptions = basePath ? { scope: basePath + '/' } : {};

      navigator.serviceWorker.register(swUrl, swOptions)
        .then(registration => {
          console.log('[kWhub PWA] Service Worker ativo com escopo:', registration.scope);

          registration.onupdatefound = () => {
            const installingWorker = registration.installing;
            if (installingWorker) {
              installingWorker.onstatechange = () => {
                if (installingWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  console.log('[kWhub PWA] Nova versão do app instalada em segundo plano.');
                }
              };
            }
          };
        })
        .catch(error => {
          console.warn('[kWhub PWA] Aviso ao registrar Service Worker:', error);
        });
    });
  }

  // 3. Captura do Evento de Instalação PWA (Chrome, Edge, Samsung Internet, Android, Desktop)
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredInstallPrompt = e;
    console.log('[kWhub PWA] Evento beforeinstallprompt capturado. App instalável!');
    atualizarBotoesInstalacao(true);
  });

  // 4. Inicialização de Interface
  document.addEventListener('DOMContentLoaded', () => {
    const basePath = getContextBasePath();

    // Atualiza link do manifest dinamicamente se necessário para subcaminho
    if (basePath) {
      const manifestLink = document.querySelector('link[rel="manifest"]');
      if (manifestLink) {
        manifestLink.href = basePath + '/manifest.json';
      }
    }

    if (!isStandalone()) {
      // Se for dispositivo móvel ou iOS, mantém a opção de instalar visível
      if (isIOS() || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        atualizarBotoesInstalacao(true);
      }
    } else {
      atualizarBotoesInstalacao(false);
    }

    // Vincula clique ao botão do cabeçalho se existir
    const btnInstalar = document.getElementById('btn-instalar-pwa-header');
    if (btnInstalar) {
      btnInstalar.addEventListener('click', window.instalarPWA);
    }
  });

  // 5. Ação de Instalar PWA
  window.instalarPWA = async function () {
    // Caso Android / Chrome / Edge / Desktop PWA com evento nativo capturado
    if (deferredInstallPrompt) {
      deferredInstallPrompt.prompt();
      const { outcome } = await deferredInstallPrompt.userChoice;
      console.log(`[kWhub PWA] Resposta da instalação: ${outcome}`);
      if (outcome === 'accepted') {
        deferredInstallPrompt = null;
        atualizarBotoesInstalacao(false);
      }
      return;
    }

    // Caso Apple iOS (Safari)
    if (isIOS()) {
      alert('Para instalar o kWhub no seu iPhone ou iPad:\n\n1. Toque no botão "Compartilhar" (ícone com quadrado e seta para cima ⎋ na barra do Safari);\n2. Role as opções e selecione "Adicionar à Tela de Início" ➕;\n3. Toque em "Adicionar" no canto superior direito.');
      return;
    }

    // Se já estiver em modo standalone
    if (isStandalone()) {
      alert('O kWhub já está instalado e rodando como aplicativo em seu dispositivo!');
      return;
    }

    // Caso Android Chrome sem prompt automático disparado de imediato
    if (/Android/i.test(navigator.userAgent)) {
      alert('Para instalar o kWhub no Android:\n\n1. Toque no menu de três pontos (⋮) no canto superior do navegador;\n2. Selecione a opção "Instalar aplicativo" ou "Adicionar à tela inicial".');
      return;
    }

    // Caso Desktop
    alert('Para instalar no Desktop:\n\nClique no ícone de instalação (computador com seta para baixo ⬇️) localizado no lado direito da barra de endereços do seu navegador (Google Chrome ou Microsoft Edge).');
  };

  // 6. Confirmação de Instalação Realizada
  window.addEventListener('appinstalled', () => {
    console.log('[kWhub PWA] Aplicativo instalado com êxito!');
    deferredInstallPrompt = null;
    atualizarBotoesInstalacao(false);
  });

  // 7. Notificações Push
  window.solicitarPermissaoNotificacoes = async function () {
    if (!('Notification' in window)) {
      alert('Seu dispositivo ou navegador não suporta notificações de sistema.');
      return false;
    }

    if (Notification.permission === 'granted') {
      return true;
    }

    if (Notification.permission !== 'denied') {
      const permission = await Notification.requestPermission();
      return permission === 'granted';
    }

    return false;
  };
})();
