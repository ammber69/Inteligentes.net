/**
 * 🛡️ inteligentes.net — Security Shield
 * 
 * Protections:
 *  1. Bloquea click derecho (context menu)
 *  2. Bloquea atajos de teclado para DevTools (F12, Ctrl+Shift+I/J/C, Ctrl+U)
 *  3. Silencia TODA la salida de console (log, warn, error, info, debug, table, dir, trace)
 *  4. Detecta apertura de DevTools y muestra advertencia
 *  5. Desactiva selección de texto y arrastrar elementos (anti-copy)
 * 
 * Para DESACTIVAR temporalmente (modo desarrollo/debug del dueño):
 *   → En la consola del navegador escribir: window.__INTELIGENTES_DEV_MODE__ = true
 *   → O pasar VITE_DEV_MODE=true en las variables de entorno
 *   → En modo dev de Vite (npm run dev) se desactiva automáticamente
 */

// ═══════════════════════════════════════════
//  CONFIG
// ═══════════════════════════════════════════
const IS_PRODUCTION = import.meta.env.PROD;

// Guardar referencias originales ANTES de sobrescribir
const _originalConsole = {
  log: console.log.bind(console),
  warn: console.warn.bind(console),
  error: console.error.bind(console),
  info: console.info.bind(console),
  debug: console.debug.bind(console),
  table: console.table.bind(console),
  dir: console.dir.bind(console),
  trace: console.trace.bind(console),
  group: console.group.bind(console),
  groupEnd: console.groupEnd.bind(console),
  clear: console.clear.bind(console),
};

// ═══════════════════════════════════════════
//  CHECK IF SECURITY SHOULD BE ACTIVE
// ═══════════════════════════════════════════
function isSecurityActive() {
  // Always off in Vite dev mode
  if (!IS_PRODUCTION) return false;
  // Owner can disable at runtime
  if (typeof window !== 'undefined' && window.__INTELIGENTES_DEV_MODE__ === true) return false;
  return true;
}

// ═══════════════════════════════════════════
//  1. BLOCK RIGHT-CLICK CONTEXT MENU
// ═══════════════════════════════════════════
function blockContextMenu() {
  document.addEventListener('contextmenu', (e) => {
    if (!isSecurityActive()) return;
    e.preventDefault();
    return false;
  }, { capture: true });
}

// ═══════════════════════════════════════════
//  2. BLOCK DEVTOOLS KEYBOARD SHORTCUTS
// ═══════════════════════════════════════════
function blockDevToolsShortcuts() {
  document.addEventListener('keydown', (e) => {
    if (!isSecurityActive()) return;

    // F12
    if (e.key === 'F12') {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // Ctrl+Shift+I (Inspect)
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // Ctrl+Shift+J (Console)
    if (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j')) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // Ctrl+Shift+C (Inspect Element)
    if (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'c')) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // Ctrl+U (View Source)
    if (e.ctrlKey && (e.key === 'U' || e.key === 'u')) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // Cmd variants for Mac
    if (e.metaKey && e.altKey && (e.key === 'I' || e.key === 'i')) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    if (e.metaKey && e.altKey && (e.key === 'J' || e.key === 'j')) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    if (e.metaKey && e.altKey && (e.key === 'U' || e.key === 'u')) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  }, { capture: true });
}

// ═══════════════════════════════════════════
//  3. SILENCE CONSOLE OUTPUT
// ═══════════════════════════════════════════
function silenceConsole() {
  if (!IS_PRODUCTION) return; // Never silence in dev mode

  const noop = () => {};

  console.log = noop;
  console.warn = noop;
  console.error = noop;
  console.info = noop;
  console.debug = noop;
  console.table = noop;
  console.dir = noop;
  console.trace = noop;
  console.group = noop;
  console.groupEnd = noop;

  // Clear any existing console output
  console.clear = _originalConsole.clear;
  console.clear();
}

// ═══════════════════════════════════════════
//  4. DEVTOOLS DETECTION
// ═══════════════════════════════════════════
function detectDevTools() {
  if (!IS_PRODUCTION) return;

  // Method 1: debugger-based detection with timing
  let devtoolsDetected = false;

  const checkDevTools = () => {
    if (!isSecurityActive()) return;
    
    const start = performance.now();
    // This debugger statement pauses if DevTools is open
    // eslint-disable-next-line no-debugger
    debugger;
    const duration = performance.now() - start;

    if (duration > 100 && !devtoolsDetected) {
      devtoolsDetected = true;
      document.body.innerHTML = `
        <div style="
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background: #060911;
          color: #f8fafc;
          font-family: 'Inter', sans-serif;
          text-align: center;
          padding: 2rem;
        ">
          <div>
            <div style="font-size: 3rem; margin-bottom: 1rem;">🛡️</div>
            <h1 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.75rem;">
              Acceso Restringido
            </h1>
            <p style="color: #94a3b8; font-size: 0.95rem; max-width: 400px;">
              Esta página está protegida. Cierra las herramientas de desarrollo y recarga la página.
            </p>
          </div>
        </div>
      `;
    }
  };

  // Check periodically (every 2 seconds)
  setInterval(checkDevTools, 2000);

  // Method 2: Window size detection (DevTools changes outer vs inner dimensions)
  const threshold = 160;
  const detectBySize = () => {
    if (!isSecurityActive()) return;
    
    const widthDiff = window.outerWidth - window.innerWidth > threshold;
    const heightDiff = window.outerHeight - window.innerHeight > threshold;
    
    if ((widthDiff || heightDiff) && !devtoolsDetected) {
      devtoolsDetected = true;
      // Redirect or show warning
      _originalConsole.clear();
    }
  };

  window.addEventListener('resize', detectBySize);
  setInterval(detectBySize, 3000);
}

// ═══════════════════════════════════════════
//  5. ANTI-COPY / ANTI-SELECT PROTECTIONS
// ═══════════════════════════════════════════
function blockSelection() {
  // Block text selection via CSS
  document.addEventListener('DOMContentLoaded', () => {
    if (!isSecurityActive()) return;

    const style = document.createElement('style');
    style.textContent = `
      body {
        -webkit-user-select: none !important;
        -moz-user-select: none !important;
        -ms-user-select: none !important;
        user-select: none !important;
      }
      /* Allow selection in form inputs */
      input, textarea, select, [contenteditable="true"] {
        -webkit-user-select: text !important;
        -moz-user-select: text !important;
        -ms-user-select: text !important;
        user-select: text !important;
      }
    `;
    document.head.appendChild(style);
  });

  // Block drag
  document.addEventListener('dragstart', (e) => {
    if (!isSecurityActive()) return;
    e.preventDefault();
    return false;
  }, { capture: true });

  // Block copy
  document.addEventListener('copy', (e) => {
    if (!isSecurityActive()) return;
    e.preventDefault();
    return false;
  }, { capture: true });

  // Block cut
  document.addEventListener('cut', (e) => {
    if (!isSecurityActive()) return;
    e.preventDefault();
    return false;
  }, { capture: true });
}

// ═══════════════════════════════════════════
//  6. CLEAN GLOBAL SCOPE
// ═══════════════════════════════════════════
function cleanGlobalScope() {
  if (!IS_PRODUCTION) return;

  // Remove source maps hint from error stack traces
  Object.defineProperty(window, '__REACT_DEVTOOLS_GLOBAL_HOOK__', {
    get: () => undefined,
    set: () => {},
    configurable: false,
  });
}

// ═══════════════════════════════════════════
//  RESTORE FUNCTION (for owner debug)
// ═══════════════════════════════════════════
function exposeRestoreFunction() {
  // Hidden restore: owner types window.__restore__() to get console back
  Object.defineProperty(window, '__restore__', {
    value: () => {
      window.__INTELIGENTES_DEV_MODE__ = true;
      Object.assign(console, _originalConsole);
      _originalConsole.log(
        '%c🔓 Modo desarrollo activado — Seguridad desactivada',
        'color: #10b981; font-size: 14px; font-weight: bold;'
      );
      _originalConsole.log(
        '%cPara reactivar: window.__INTELIGENTES_DEV_MODE__ = false y recarga la página',
        'color: #94a3b8; font-size: 12px;'
      );
    },
    writable: false,
    enumerable: false,
    configurable: false,
  });
}

// ═══════════════════════════════════════════
//  INIT — Activate all protections
// ═══════════════════════════════════════════
export function initSecurityShield() {
  blockContextMenu();
  blockDevToolsShortcuts();
  silenceConsole();
  blockSelection();
  cleanGlobalScope();
  exposeRestoreFunction();

  // Only run aggressive detection in production
  // DISABLED by default — uncomment below if you want the debugger-trap active:
  // detectDevTools();

  if (IS_PRODUCTION) {
    _originalConsole.clear();
  }
}

// Export for manual control
export function disableSecurity() {
  window.__INTELIGENTES_DEV_MODE__ = true;
  Object.assign(console, _originalConsole);
}

export function enableSecurity() {
  window.__INTELIGENTES_DEV_MODE__ = false;
  silenceConsole();
}
