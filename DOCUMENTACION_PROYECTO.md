# 📘 Documentación General del Proyecto - Inteligentes.net

> **Proyecto:** Landing Page Interactivas & Servicios Digitales (SEO, GEO/AEO, Google Maps)  
> **Ubicación del Código:** `/home/ammber/React/inteligentesNet`  
> **Tecnologías:** React 19, Vite 8, CSS3 Moderno, Lucide Icons, Terser  
> **Fecha de Actualización:** Septiembre 2026  

---

## 📑 Tabla de Contenidos
1. [Resumen Ejecutivo](#1-resumen-ejecutivo)
2. [Fase 1: Responsividad Móvil Total (100% Responsive Design)](#2-fase-1-responsividad-móvil-total-100-responsive-design)
3. [Fase 2: Rediseño Estético del Botón de Cierre en Modales](#3-fase-2-rediseño-estético-del-botón-de-cierre-en-modales)
4. [Fase 3: Escudo de Seguridad, Encriptación y Protección Anti-Inspección](#4-fase-3-escudo-de-seguridad-encriptación-y-protección-anti-inspección)
5. [Estructura de Archivos del Proyecto](#5-estructura-de-archivos-del-proyecto)
6. [Guía para el Desarrollador / Administración](#6-guía-para-el-desarrollador--administración)

---

## 1. Resumen Ejecutivo

Durante el desarrollo de la aplicación **Inteligentes.net**, se ejecutó una serie de optimizaciones integrales enfocadas en tres pilares fundamentales:
1. **Experiencia de Usuario en Móviles (UX/UI):** Garantizar que ningún elemento sobresalga de la pantalla en ningún dispositivo (especialmente en iPhones con notch y pantallas pequeñas) sin perder contenido.
2. **Refinamiento de Modales e Interacción:** Mejorar la presentación visual y accesibilidad de las ventanas emergentes (como el Diagnóstico de Visibilidad).
3. **Escudo de Seguridad y Protección de Código:** Proteger el código fuente, la lógica del cliente y la data sensible mediante silenciado de consola, bloqueo de herramientas de inspección (DevTools, clic derecho, atajos de teclado) y ofuscación/encriptación en la compilación de producción.

---

## 2. Fase 1: Responsividad Móvil Total (100% Responsive Design)

### 🔴 Problema Detectado
- En dispositivos iPhone y smartphones con pantallas angostas, el botón de menú tipo "hamburgesa" se salía del margen horizontal visible.
- Existía un desbordamiento horizontal (`horizontal scroll/overflow`) que cortaba contenido estratégico de la landing page.

### 🛠️ Soluciones Implementadas

#### A. Soporte para Áreas Seguras e iOS Notch (`index.html`)
- Se incluyó la directiva `viewport-fit=cover` en la etiqueta `<meta name="viewport">` para adaptar el layout a las pantallas con notch en iPhones modernos:
  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  ```

#### B. Prevención de Desbordamiento Global (`src/index.css`)
- Se configuró el reset global con `max-width: 100vw`, `overflow-x: hidden` y prevención de ajuste automático de texto en iOS:
  ```css
  html, body {
    max-width: 100vw;
    overflow-x: hidden;
    -webkit-text-size-adjust: 100%;
  }

  #root {
    max-width: 100vw;
    overflow-x: hidden;
  }
  ```

#### C. Ajuste del Menú de Navegación (`src/components/Navbar.jsx` y `src/App.css`)
- Se asignó `flexShrink: 0` al contenedor de botones de la barra de navegación para evitar colapsos o deformaciones.
- Se agregó ajuste elástico al logotipo del sitio (`.brand-logo`) con desbordamiento elíptico en textos largos (`text-overflow: ellipsis`).
- **Nuevos Breakpoints CSS en `src/App.css`:**
  - **`@media (max-width: 768px)`**:
    - Escalado adaptable de botones (tamaño reducido a 38px de alto).
    - Ajuste de relleno (`padding`) en contenedores principales.
    - Menú desplegable móvil optimizado (`top: 60px`, `overflow-y: auto`, animación fluida `fadeIn` y desenfoque adaptativo `-webkit-backdrop-filter`).
  - **`@media (max-width: 400px)`**:
    - Optimización especial para teléfonos pequeños (iPhone SE / Galaxy A series).
    - Reducción proporcional de fuentes, márgenes y tarjetas de testimonio/confianza.

---

## 3. Fase 2: Rediseño Estético del Botón de Cierre en Modales

### 🔴 Problema Detectado
- El botón de cierre (`X`) en la ventana modal de *Diagnóstico de Visibilidad* lucía desalineado, sin contraste suficiente y poco estético según el diseño moderno de la página.

### 🛠️ Soluciones Implementadas

#### A. Rediseño del Botón (`src/App.css`)
- Se transformó la clase `.modal-close-btn` a un botón circular de aspecto traslúcido y elevado (`glassmorphism`):
  ```css
  .modal-close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    color: var(--text-muted);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.25s ease;
    z-index: 10;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }

  .modal-close-btn:hover {
    color: var(--text-primary);
    border-color: var(--accent-cyan);
    background: rgba(255, 255, 255, 0.1);
    transform: rotate(90deg) scale(1.05);
    box-shadow: 0 0 12px var(--accent-glow);
  }
  ```

#### B. Espaciado del Encabezado Modal (`src/components/DiagnosticModal.jsx`)
- Se añadió un relleno seguro (`paddingRight: '2rem'`) en el encabezado del modal para asegurar que el título o logotipo nunca se solape con la `X` de cierre.

---

## 4. Fase 3: Escudo de Seguridad, Encriptación y Protección Anti-Inspección

### 🔴 Requerimiento
- Ocultar la información, funciones, data y variables en la consola del navegador.
- Bloquear herramientas de inspección (DevTools), menú contextual (clic derecho) y accesos directos de teclado.
- Permitir al propietario del sitio la facultad de reactivar/desencriptar las herramientas de depuración cuando lo necesite.

### 🛠️ Soluciones Implementadas

#### A. Módulo del Escudo de Seguridad (`src/utils/security.js`)
Se creó un sistema de protección integral con múltiples capas:

1. **Bloqueo de Clic Derecho (`blockContextMenu`):** Previene la apertura del menú contextual del navegador.
2. **Bloqueo de Atajos de Teclado DevTools (`blockDevToolsShortcuts`):** Captura e inactiva combinaciones de teclas usadas para inspeccionar:
   - `F12`
   - `Ctrl + Shift + I` / `Cmd + Option + I` (Inspeccionar elemento)
   - `Ctrl + Shift + J` / `Cmd + Option + J` (Consola)
   - `Ctrl + Shift + C` / `Cmd + Option + C` (Selector de elementos)
   - `Ctrl + U` / `Cmd + Option + U` (Ver código fuente)
3. **Silenciado de Consola (`silenceConsole`):** Reemplaza dinámicamente todas las salidas de `console` (`log`, `warn`, `error`, `info`, `table`, `dir`, etc.) por funciones nulas (`noop`).
4. **Protección de Selección y Arrastre (`blockSelection`):** Inhabilita la selección de texto no deseada y el arrastre de elementos, manteniendo 100% operativos los campos de formulario (`input`, `textarea`).
5. **Limpieza del Scope Global (`cleanGlobalScope`):** Destruye el hook de React DevTools (`__REACT_DEVTOOLS_GLOBAL_HOOK__`) en producción.
6. **Mecanismo de Desbloqueo / Restauración (`exposeRestoreFunction`):**
   - El propietario o administrador puede ejecutar en consola:
     ```javascript
     window.__restore__()
     ```
   - Esto reactiva la consola completa para tareas de soporte o análisis.

#### B. Compilación de Producción, Minimización y Ofuscación (`vite.config.js`)
Se integró el plugin de minimización **Terser** en la configuración de compilación de Vite:
```javascript
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,     // Elimina console.log de la compilación final
        drop_debugger: true,    // Elimina instrucciones debugger
        pure_funcs: ['console.log', 'console.info', 'console.debug']
      },
      mangle: {
        toplevel: true          // Ofusca nombres de variables y funciones globales
      },
      format: {
        comments: false         // Remueve todos los comentarios del código
      }
    },
    sourcemap: false,           // Deshabilita mapas de código para evitar ingeniería inversa
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[hash].js',
        chunkFileNames: 'assets/[hash].js',
        assetFileNames: 'assets/[hash].[ext]'
      }
    }
  }
})
```

---

## 5. Estructura de Archivos del Proyecto

Los archivos principales creados o modificados durante este proceso son:

```
inteligentesNet/
├── index.html                       # Base HTML + viewport-fit=cover
├── vite.config.js                   # Configuración Terser + Ofuscación
├── package.json                     # Dependencias (incluye terser)
├── DOCUMENTACION_PROYECTO.md         # Documentación oficial del proyecto
└── src/
    ├── main.jsx                     # Punto de entrada + Init Security Shield
    ├── index.css                    # Estilos base + resets responsive
    ├── App.css                      # Breakpoints responsivos + Estilo Modal Close
    ├── components/
    │   ├── Navbar.jsx               # Menú con soporte responsivo
    │   └── DiagnosticModal.jsx      # Modal con botón de cierre rediseñado
    └── utils/
        └── security.js              # [NUEVO] Módulo del Escudo de Seguridad
```

---

## 6. Guía para el Desarrollador / Administración

### 🚀 Modo Desarrollo vs Producción
- **En Entorno de Desarrollo (`npm run dev`):** El escudo de seguridad detecta automáticamente el entorno local y se desactiva para permitir la libre depuración con `console.log` y herramientas DevTools.
- **En Entorno de Producción (`npm run build`):** El escudo de seguridad se activa automáticamente al cargar la aplicación.

### 🔓 Cómo Forzar la Desactivación de Seguridad
Si necesitas probar el sitio en producción con la consola activa, puedes establecer la siguiente variable antes del inicio o en la consola del navegador:
```javascript
window.__INTELIGENTES_DEV_MODE__ = true;
```
O ejecutar en la consola:
```javascript
window.__restore__();
```

---

*Documento generado por Antigravity AI para Inteligentes.net*
