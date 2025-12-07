# Fundamentos de Desarrollo Web

[![Made with HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES202x-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Node.js >= 18](https://img.shields.io/badge/Node.js-%E2%89%A5%2018-339933?logo=node.js&logoColor=white)](https://nodejs.org/)

Un conjunto curado de ejercicios y mini‑proyectos pequeños y enfocados para **aprender las bases del desarrollo frontend moderno**:

- **HTML semántico** y estructura limpia del documento  
- **CSS moderno**: Flexbox, Grid, diseño responsivo y pensamiento de layout  
- **Librerías de componentes**: Bootstrap y Tailwind CSS (incluyendo dark mode y flujo utility‑first)  
- **JavaScript introductorio**: variables, operaciones y tipos de datos  
- **Herramientas del mundo real**: Node.js, Tailwind CLI, Vite (React) y configuraciones con Next.js para principiantes  

Usa este repositorio como **ruta de aprendizaje** y **zona de práctica** para estudiantes o autodidactas que quieran pasar de páginas estáticas básicas a proyectos con frameworks.

---

## Estructura del repositorio

Cada directorio es un ejemplo independiente diseñado para practicar un **concepto específico**. Abre el HTML directamente para los demos de HTML/CSS puro, o instala dependencias y ejecuta el servidor de desarrollo para los ejemplos basados en Node.

- **Fundamentos de CSS** (diseño visual, maquetación y pensamiento responsivo)
  - [css_01_login-page](css_01_login-page/) — Formulario de login con HTML/CSS (formularios, layout básico, inputs/botones)
  - [css_02_navbar](css_02_navbar/) — Barra de navegación responsiva (layout horizontal, menús, estados hover)
  - [css_03_flexbox](css_03_flexbox/) — Fundamentos de layout con Flexbox (ejes, alineación, espaciado)
  - [css_04_gridbox-basics](css_04_gridbox-basics/) — Fundamentos de CSS Grid (filas, columnas, gaps)
  - [css_05_gridbox-advanced](css_05_gridbox-advanced/) — Técnicas avanzadas de CSS Grid (áreas, layouts complejos)
  - [css_06_mini-shop-practica](css_06_mini-shop-practica/) — Páginas estáticas de una mini tienda (inicio, productos, error) con foco en consistencia de layout y estructura de UI
  - [css_07_media-query](css_07_media-query/) — Media queries y utilidades responsivas (diseño mobile‑first)
  - [css_08_bootstrap-basics](css_08_bootstrap-basics/) — Componentes y layout con Bootstrap (sistema de grid, utilidades, componentes listos)
  - [css_09_practica-pagina-estatica-bootstrap](css_09_practica-pagina-estatica-bootstrap/) — Sitio estático con Bootstrap (construyendo una página pequeña con varias secciones)

- **Tailwind CSS** (CSS utility‑first y flujos modernos)
  - [css_12_tailwind-basic-installation](css_12_tailwind-basic-installation/) — Tailwind CLI + BrowserSync (sin framework): **instalación, configuración y pipeline de build**
  - [css_13_tailwind-login-page](css_13_tailwind-login-page/) — Página de login con Tailwind: **clases utilitarias, espaciado, colores, tipografía**
  - [css_14_tailwind-responsive-darkmode](css_14_tailwind-responsive-darkmode/) — Tailwind responsivo + dark mode + DaisyUI: **breakpoints, temas y estilos de componentes**
  - [css_15_tailwind-layout-responsive](css_15_tailwind-layout-responsive/) — Tailwind v4 CLI, layout responsivo: **composición de layout y estructura de página**
  - **Integraciones con frameworks** (cómo encaja Tailwind en frameworks JS modernos):
    - [css_10_tailwind-vite-installation](css_10_tailwind-vite-installation/) — React + Vite + Tailwind v4 (ver su [README](css_10_tailwind-vite-installation/README.md)): **configuración del proyecto, servidor de desarrollo y build*
    - [css_11_tailwind-nextjs-installation](css_11_tailwind-nextjs-installation/) — Next.js + Tailwind v4 (ver su [README](css_11_tailwind-nextjs-installation/README.md)): **enrutado basado en archivos y estructura de proyecto*

- **Fundamentos de JavaScript** (conceptos básicos del lenguaje para principiantes)
  - [js_01_basic-variables](js_01_basic-variables/) — Variables, `let`/`const`, nombres y uso básico
  - [js_02_operations](js_02_operations/) — Operadores aritméticos, de asignación y lógicos en la práctica
  - [js_03_data-types](js_03_data-types/) — Primitivos vs objetos, coerción de tipos y depuración básica con `console.log`

---

## Por qué este proyecto es útil

Este repositorio está pensado para **estudiantes, asistentes a bootcamps y desarrolladores autodidactas** que necesitan **práctica basada en ejercicios**:

- Ejemplos pequeños y enfocados para un **aprendizaje rápido y de referencia**  
- Progresión clara desde **páginas estáticas simples** hasta **configuraciones con frameworks** (Vite/React, Next.js)  
- Comparación lado a lado de **técnicas de layout** (Flexbox vs Grid) y **enfoques de CSS** (CSS puro vs Bootstrap vs Tailwind)  
- Flujos de desarrollo realistas: Tailwind CLI, Vite y Next.js, para que las personas vean **cómo se estructuran y ejecutan los proyectos reales**  
- Ejemplos listos para ejecutar que puedes **tocar, romper y reconstruir** para afianzar conceptos  

Puedes usarlo para:
- Ejercicios en clase
- Tareas o sets de práctica
- Ruta de estudio personal de fundamentos de frontend

---

## Primeros pasos

### Prerrequisitos

- Para los ejemplos estáticos de HTML/CSS: **cualquier navegador moderno**
- Para los ejemplos basados en Node (Tailwind CLI, Vite/React, Next.js):
  - Node.js 18+ y npm

Verifica tus versiones:
```bash
node -v
npm -v
```

### Ejecutar un ejemplo específico

Elige uno de los directorios de abajo y sigue las instrucciones correspondientes.

1) **Ejemplos de HTML/CSS puro (sin Node)**  
- Ejemplos: `css_01` a `css_09` (salvo que se indique lo contrario)  
- Cómo ejecutarlos:
  - Opción A: abre el archivo `index.html` en tu navegador
  - Opción B (servidor local opcional):
    ```bash
    # Python 3
    python3 -m http.server 5173
    # luego abre http://localhost:5173 en tu navegador
    ```

2) **Tailwind CSS (CLI, sin framework)**  
- Ejemplos: `css_12_tailwind-basic-installation`, `css_13_tailwind-login-page`, `css_14_tailwind-responsive-darkmode`, `css_15_tailwind-layout-responsive`  
- Flujo típico:
  ```bash
  cd css_12_tailwind-basic-installation   # o css_13_... / css_14_... / css_15_...
  npm install
  # Una terminal: build en modo watch
  npm run watch
  # Otra terminal (si el proyecto lo soporta): servir y recargar automáticamente
  npm run serve
  # Abre 'src/index.html' en tu navegador (BrowserSync puede abrirla automáticamente)
  ```

3) **React + Vite + Tailwind v4**  
- Ejemplo: `css_10_tailwind-vite-installation`  
- Cómo ejecutarlo:
  ```bash
  cd css_10_tailwind-vite-installation
  npm install
  npm run dev
  # Abre la URL local que se imprime (por ejemplo, http://localhost:5173)
  ```
- Detalles: ver [css_10_tailwind-vite-installation/README.md](css_10_tailwind-vite-installation/README.md)

4) **Next.js + Tailwind v4**  
- Ejemplo: `css_11_tailwind-nextjs-installation`  
- Cómo ejecutarlo:
  ```bash
  cd css_11_tailwind-nextjs-installation
  npm install
  npm run dev
  # Abre http://localhost:3000
  ```
- Detalles: ver [css_11_tailwind-nextjs-installation/README.md](css_11_tailwind-nextjs-installation/README.md)

---

## Inicializar un nuevo proyecto con `npm run dev` y Tailwind CSS

Usa esta guía si quieres empezar **desde cero** con un proyecto pequeño que:

- sirva tus archivos con **live reload** usando `npm run dev`
- compile **Tailwind CSS** en modo watch

Esta configuración funciona en **GNU/Linux y macOS**. En Windows puede que necesites ajustar las comillas en los scripts.

### 1. Inicializar el proyecto y añadir BrowserSync

Crea una nueva carpeta para tu proyecto y ejecuta:

```bash
npm init -y
npm install --save-dev browser-sync
```

Luego crea un `package.json` (o actualiza el que se generó) con al menos:

```json
{
  "scripts": {
    "serve": "browser-sync start --server src --files 'src/**/*.*'",
    "dev": "npm run serve"
  },
  "devDependencies": {
    "browser-sync": "^3.0.4"
  }
}
```

### 2. Estructura del proyecto

Organiza tus archivos así:

```text
project/
├─ src/
│  ├─ index.html
│  ├─ style.css
│  └─ script.js
└─ package.json
```

Ahora puedes ejecutar un servidor con live reload:

```bash
npm run dev
```

### 3. Añadir Tailwind CSS

Instala Tailwind y su CLI:

```bash
npm install tailwindcss @tailwindcss/cli
```

Crea `src/input.css` e importa Tailwind:

```css
@import "tailwindcss";
```

Compila tu CSS en modo watch:

```bash
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```

Finalmente, importa el CSS generado en tu HTML (por ejemplo en `src/index.html`):

```html
<link href="./output.css" rel="stylesheet">
```

Normalmente usarás **dos terminales**:

- Terminal 1: `npm run dev` (servidor con BrowserSync)
- Terminal 2: `npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch` (compilador de Tailwind)

---

## Chuleta de scripts (por carpeta)

- **Ejemplos con Tailwind CLI**
  - `npm run build` — compilación de CSS puntual
  - `npm run watch` — compilar CSS en modo watch
  - `npm run serve` — servidor estático + recarga en vivo (si está disponible)
  - `npm run dev` — watch + servidor en un solo comando (si está disponible)

- **React + Vite**
  - `npm run dev` — iniciar el servidor de desarrollo
  - `npm run build` — build de producción
  - `npm run preview` — previsualizar el build de producción localmente
  - `npm run lint` — ejecutar ESLint (si está configurado)

- **Next.js**
  - `npm run dev` — iniciar el servidor de desarrollo de Next
  - `npm run build` — build de producción
  - `npm start` — iniciar el servidor de producción
  - `npm run lint` — ejecutar ESLint

Consulta el `package.json` de cada carpeta para ver los scripts exactos soportados.

---

## Obtener ayuda

- Notas específicas por proyecto:
  - [css_10_tailwind-vite-installation/README.md](css_10_tailwind-vite-installation/README.md)
  - [css_11_tailwind-nextjs-installation/README.md](css_11_tailwind-nextjs-installation/README.md)
- Abre un issue incluyendo:
  - La carpeta en la que estás trabajando
  - Pasos para reproducir el problema
  - Las versiones de Node/npm (si es relevante)
  - Capturas de pantalla o logs de error

---

## Contribuir

Las contribuciones son bienvenidas, especialmente las que **mejoren la experiencia de aprendizaje**:

- Elige una carpeta y mejora accesibilidad, responsividad o claridad del código
- Añade un nuevo ejemplo que demuestre un **concepto enseñable específico** (por ejemplo: formularios, animaciones, manipulación básica del DOM)
- Envía pull requests pequeños y enfocados con una descripción clara

Checklist recomendada para PRs:
- El ejemplo se ejecuta sin errores
- Mantén las dependencias mínimas y limitadas a la carpeta del ejemplo
- Añade una nota corta en la sección “Estructura del repositorio” de este README si añades una nueva carpeta

---

## Mantenedores

Este repositorio es mantenido por la persona propietaria del repo. Si quieres colaborar, abre un issue para comentar ideas o mejoras.
---
