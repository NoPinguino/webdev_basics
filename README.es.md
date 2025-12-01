# Web Dev Basics (Español)

[![Hecho con HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES202x-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Node.js >= 18](https://img.shields.io/badge/Node.js-%E2%89%A5%2018-339933?logo=node.js&logoColor=white)](https://nodejs.org/)

Conjunto de ejercicios y mini-proyectos enfocados para aprender los fundamentos del desarrollo web: HTML semántico, CSS moderno (Flexbox, Grid, diseño responsive), Bootstrap, Tailwind CSS (CLI, Vite + React, Next.js) y fundamentos de JavaScript.

Versión en inglés: [README.md](README.md)

---

## Estructura del repositorio

Cada carpeta es un ejemplo independiente. Para los ejemplos puramente estáticos, abre el HTML en el navegador. Para los que usan Node, instala dependencias y ejecuta el servidor de desarrollo.

- Fundamentos de CSS
  - [css_01_login-page](css_01_login-page/) — Formulario de login con HTML/CSS
  - [css_02_navbar](css_02_navbar/) — Barra de navegación responsive
  - [css_03_flexbox](css_03_flexbox/) — Conceptos básicos de Flexbox
  - [css_04_gridbox-basics](css_04_gridbox-basics/) — Conceptos básicos de CSS Grid
  - [css_05_gridbox-advanced](css_05_gridbox-advanced/) — Técnicas avanzadas de Grid
  - [css_06_mini-shop-practica](css_06_mini-shop-practica/) — Páginas estáticas de mini-tienda (home, productos, error)
  - [css_07_media-query](css_07_media-query/) — Media queries y utilidades responsive
  - [css_08_bootstrap-basics](css_08_bootstrap-basics/) — Componentes y layout con Bootstrap
  - [css_09_practica-pagina-estatica-bootstrap](css_09_practica-pagina-estatica-bootstrap/) — Sitio estático con Bootstrap

- Tailwind CSS
  - [css_12_tailwind-basic-installation](css_12_tailwind-basic-installation/) — Build con Tailwind CLI + BrowserSync (sin framework)
  - [css_13_tailwind-login-page](css_13_tailwind-login-page/) — Login con Tailwind y servidor en vivo
  - [css_14_tailwind-responsive-darkmode](css_14_tailwind-responsive-darkmode/) — Responsive + dark mode + DaisyUI
  - [css_15_tailwind-layout-responsive](css_15_tailwind-layout-responsive/) — Tailwind v4 CLI, layout responsive
  - Integraciones con framework:
    - [css_10_tailwind-vite-installation](css_10_tailwind-vite-installation/) — React + Vite + Tailwind v4 (ver su [README](css_10_tailwind-vite-installation/README.md))
    - [css_11_tailwind-nextjs-installation](css_11_tailwind-nextjs-installation/) — Next.js + Tailwind v4 (ver su [README](css_11_tailwind-nextjs-installation/README.md))

- Fundamentos de JavaScript
  - [js_01_basic-variables](js_01_basic-variables/) — Variables y tipos
  - [js_02_operations](js_02_operations/) — Operadores aritméticos, de asignación y lógicos
  - [js_03_data-types](js_03_data-types/) — Primitivos vs objetos, coerción

---

## ¿Por qué es útil?

- Ejemplos pequeños y concretos para aprender rápido
- Progresión clara: páginas estáticas → Tailwind CLI → Vite/React → Next.js
- Comparativa de técnicas de layout (Flexbox vs Grid)
- Flujos de trabajo reales: Tailwind CLI, Vite y Next.js
- Proyectos listos para ejecutar y modificar

---

## Requisitos

- Ejemplos estáticos (HTML/CSS): cualquier navegador moderno
- Ejemplos con Node (Tailwind CLI, Vite/React, Next.js):
  - Node.js 18+ y npm

Comprueba versiones:
```bash
node -v
npm -v
```

---

## Cómo empezar

Elige una carpeta y sigue las instrucciones correspondientes.

### 1) HTML/CSS puros (sin Node)
- Ejemplos: css_01 a css_09 (donde aplique)
- Cómo ejecutar:
  - Opción A: abre el archivo `index.html` en tu navegador
  - Opción B (servidor local opcional):
    ```bash
    # Python 3
    python3 -m http.server 5173
    # Abre http://localhost:5173 en el navegador
    ```

### 2) Tailwind CSS (CLI, sin framework)
- Ejemplos: css_12_tailwind-basic-installation, css_13_tailwind-login-page, css_14_tailwind-responsive-darkmode, css_15_tailwind-layout-responsive
- Flujo típico:
  ```bash
  cd css_12_tailwind-basic-installation   # o css_13_... / css_14_... / css_15_...
  npm install
  # Terminal 1: compila en modo watch
  npm run watch
  # Terminal 2 (si existe en ese proyecto): servidor y autorecarga
  npm run serve
  # Abre 'src/index.html' (BrowserSync puede abrirlo automáticamente)
  ```

### 3) React + Vite + Tailwind v4
- Ejemplo: css_10_tailwind-vite-installation
- Cómo ejecutar:
  ```bash
  cd css_10_tailwind-vite-installation
  npm install
  npm run dev
  # Abre la URL local que imprime (p. ej., http://localhost:5173)
  ```
- Detalles: [css_10_tailwind-vite-installation/README.md](css_10_tailwind-vite-installation/README.md)

### 4) Next.js + Tailwind v4
- Ejemplo: css_11_tailwind-nextjs-installation
- Cómo ejecutar:
  ```bash
  cd css_11_tailwind-nextjs-installation
  npm install
  npm run dev
  # Abre http://localhost:3000
  ```
- Detalles: [css_11_tailwind-nextjs-installation/README.md](css_11_tailwind-nextjs-installation/README.md)

---

## Ejemplos de uso

- Técnicas de layout:
  - [css_03_flexbox](css_03_flexbox/) para practicar `display: flex` y alineación
  - [css_04_gridbox-basics](css_04_gridbox-basics/) y [css_05_gridbox-advanced](css_05_gridbox-advanced/) para rejillas complejas
- Diseño responsive:
  - [css_07_media-query](css_07_media-query/) con media queries nativas
  - [css_14_tailwind-responsive-darkmode](css_14_tailwind-responsive-darkmode/) con breakpoints de Tailwind y modo oscuro
- Librerías de componentes:
  - [css_08_bootstrap-basics](css_08_bootstrap-basics/)
  - [css_14_tailwind-responsive-darkmode](css_14_tailwind-responsive-darkmode/) con Tailwind + DaisyUI
- Fundamentos de JS:
  - [js_01_basic-variables](js_01_basic-variables/)
  - [js_02_operations](js_02_operations/)
  - [js_03_data-types](js_03_data-types/)

---

## Hoja de comandos (scripts)

- Ejemplos con Tailwind CLI
  - `npm run build` — compila CSS una vez
  - `npm run watch` — compila CSS en modo observación
  - `npm run serve` — servidor estático + live reload (si está definido)
  - `npm run dev` — watch + serve (si está definido)

- React + Vite
  - `npm run dev` — servidor de desarrollo
  - `npm run build` — build de producción
  - `npm run preview` — vista previa del build
  - `npm run lint` — ESLint (si está configurado)

- Next.js
  - `npm run dev` — dev server
  - `npm run build` — build de producción
  - `npm start` — servidor de producción
  - `npm run lint` — ESLint

Consulta el `package.json` de cada carpeta para ver los scripts exactos.

---

## Ayuda

- Notas específicas:
  - [css_10_tailwind-vite-installation/README.md](css_10_tailwind-vite-installation/README.md)
  - [css_11_tailwind-nextjs-installation/README.md](css_11_tailwind-nextjs-installation/README.md)
- Al abrir un issue, incluye:
  - Carpeta/proyecto donde ocurre el problema
  - Pasos para reproducir
  - Versiones de Node/npm (si aplica)
  - Capturas o logs de error

---

## Cómo contribuir

¡Se aceptan contribuciones!
- Elige una carpeta y mejora accesibilidad, responsive o claridad del código
- Añade un ejemplo nuevo para un concepto concreto
- Envía PRs pequeños y enfocados con una descripción clara

Checklist recomendado para PRs:
- El ejemplo se ejecuta sin errores
- Dependencias mínimas y acotadas a la carpeta del ejemplo
- Añade una nota breve en “Estructura del repositorio” si agregas una carpeta nueva

---

## Mantenimiento

Este repositorio está mantenido por su autor/a. Si quieres colaborar, abre un issue para comentar ideas o mejoras.