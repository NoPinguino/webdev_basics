# Web Dev Basics

[![Made with HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES202x-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Node.js >= 18](https://img.shields.io/badge/Node.js-%E2%89%A5%2018-339933?logo=node.js&logoColor=white)](https://nodejs.org/)

A curated set of small, focused exercises and mini-projects to learn core web development concepts: semantic HTML, modern CSS (Flexbox, Grid, responsive design), Bootstrap, Tailwind CSS (CLI, Vite + React, Next.js), and JavaScript fundamentals.

Use this repository as a playground to explore, compare, and practice frontend building blocks with progressively more advanced setups.

---

## Repository structure

Each directory is a self-contained example. Open the HTML directly for pure HTML/CSS demos, or install dependencies and run the dev server for Node-based ones.

- CSS fundamentals
  - [css_01_login-page](css_01_login-page/) — HTML/CSS login form UI
  - [css_02_navbar](css_02_navbar/) — Responsive navigation bar
  - [css_03_flexbox](css_03_flexbox/) — Flexbox layout basics
  - [css_04_gridbox-basics](css_04_gridbox-basics/) — CSS Grid basics
  - [css_05_gridbox-advanced](css_05_gridbox-advanced/) — CSS Grid advanced techniques
  - [css_06_mini-shop-practica](css_06_mini-shop-practica/) — Mini shop static pages (home, products, error)
  - [css_07_media-query](css_07_media-query/) — Media queries and responsive utilities
  - [css_08_bootstrap-basics](css_08_bootstrap-basics/) — Bootstrap components and layout
  - [css_09_practica-pagina-estatica-bootstrap](css_09_practica-pagina-estatica-bootstrap/) — Static site with Bootstrap

- Tailwind CSS
  - [css_12_tailwind-basic-installation](css_12_tailwind-basic-installation/) — Tailwind CLI build + BrowserSync (no framework)
  - [css_13_tailwind-login-page](css_13_tailwind-login-page/) — Tailwind login page with live dev server
  - [css_14_tailwind-responsive-darkmode](css_14_tailwind-responsive-darkmode/) — Responsive Tailwind + dark mode + DaisyUI
  - [css_15_tailwind-layout-responsive](css_15_tailwind-layout-responsive/) — Tailwind v4 CLI, responsive layout
  - Framework integrations:
    - [css_10_tailwind-vite-installation](css_10_tailwind-vite-installation/) — React + Vite + Tailwind v4 (see its [README](css_10_tailwind-vite-installation/README.md))
    - [css_11_tailwind-nextjs-installation](css_11_tailwind-nextjs-installation/) — Next.js + Tailwind v4 (see its [README](css_11_tailwind-nextjs-installation/README.md))

- JavaScript fundamentals
  - [js_01_basic-variables](js_01_basic-variables/) — Variables, types overview
  - [js_02_operations](js_02_operations/) — Arithmetic, assignment, logical operators
  - [js_03_data-types](js_03_data-types/) — Primitives vs objects, coercion

---

## Why this project is useful

- Bite-sized, focused examples for quick learning and reference
- Clear progression from simple static pages to framework setups
- Side-by-side comparison of layout techniques (Flexbox vs Grid)
- Realistic dev workflows: Tailwind CLI, Vite, and Next.js
- Ready-to-run examples you can tweak and extend

---

## Getting started

### Prerequisites

- For static HTML/CSS examples: any modern browser
- For Node-based examples (Tailwind CLI, Vite/React, Next.js):
  - Node.js 18+ and npm

Check your versions:
```bash
node -v
npm -v
```

### Run a specific example

Choose one directory below and follow the matching instructions.

1) Pure HTML/CSS examples (no Node required)
- Examples: css_01 to css_09 (except where noted)
- How to run:
  - Option A: Open the `index.html` file in your browser
  - Option B (optional local server):
    ```bash
    # Python 3
    python3 -m http.server 5173
    # then open http://localhost:5173 in your browser
    ```

2) Tailwind CSS (CLI, no framework)
- Examples: css_12_tailwind-basic-installation, css_13_tailwind-login-page, css_14_tailwind-responsive-darkmode, css_15_tailwind-layout-responsive
- Typical workflow:
  ```bash
  cd css_12_tailwind-basic-installation   # or css_13_... / css_14_... / css_15_...
  npm install
  # One terminal: build in watch mode
  npm run watch
  # Another terminal (if available in that project): serve and auto-reload
  npm run serve
  # Open the 'src/index.html' in your browser (BrowserSync may open it automatically)
  ```

3) React + Vite + Tailwind v4
- Example: css_10_tailwind-vite-installation
- How to run:
  ```bash
  cd css_10_tailwind-vite-installation
  npm install
  npm run dev
  # Open the printed local URL (e.g., http://localhost:5173)
  ```
- Details: see [css_10_tailwind-vite-installation/README.md](css_10_tailwind-vite-installation/README.md)

4) Next.js + Tailwind v4
- Example: css_11_tailwind-nextjs-installation
- How to run:
  ```bash
  cd css_11_tailwind-nextjs-installation
  npm install
  npm run dev
  # Open http://localhost:3000
  ```
- Details: see [css_11_tailwind-nextjs-installation/README.md](css_11_tailwind-nextjs-installation/README.md)

---

## Usage examples

- Explore layout techniques:
  - [css_03_flexbox](css_03_flexbox/) to practice `display: flex` and alignment
  - [css_04_gridbox-basics](css_04_gridbox-basics/) and [css_05_gridbox-advanced](css_05_gridbox-advanced/) for grid layouts
- Build responsive UIs:
  - [css_07_media-query](css_07_media-query/) with native CSS media queries
  - [css_14_tailwind-responsive-darkmode](css_14_tailwind-responsive-darkmode/) for Tailwind breakpoints + dark mode
- Compare component libraries:
  - [css_08_bootstrap-basics](css_08_bootstrap-basics/)
  - [css_14_tailwind-responsive-darkmode](css_14_tailwind-responsive-darkmode/) with Tailwind + DaisyUI
- Learn JS fundamentals:
  - [js_01_basic-variables](js_01_basic-variables/)
  - [js_02_operations](js_02_operations/)
  - [js_03_data-types](js_03_data-types/)

---

## Scripts cheat sheet (by folder)

- Tailwind CLI examples
  - `npm run build` — one-off compile CSS
  - `npm run watch` — compile CSS in watch mode
  - `npm run serve` — static server + live reload (if present)
  - `npm run dev` — combined watch + serve (if present)

- React + Vite
  - `npm run dev` — start the dev server
  - `npm run build` — production build
  - `npm run preview` — preview production build locally
  - `npm run lint` — run ESLint (if configured)

- Next.js
  - `npm run dev` — start Next dev server
  - `npm run build` — production build
  - `npm start` — start production server
  - `npm run lint` — run ESLint

Refer to each folder’s `package.json` for the exact scripts supported.

---

## Getting help

- Project-specific notes:
  - [css_10_tailwind-vite-installation/README.md](css_10_tailwind-vite-installation/README.md)
  - [css_11_tailwind-nextjs-installation/README.md](css_11_tailwind-nextjs-installation/README.md)
- Open an issue with:
  - The folder you’re working in
  - Steps to reproduce
  - Your Node/npm versions (if relevant)
  - Screenshots or error logs

---

## Contributing

Contributions are welcome:
- Pick a folder and improve accessibility, responsiveness, or code clarity
- Add a new example demonstrating a specific concept
- Submit small, focused pull requests with a clear description

Recommended PR checklist:
- The example runs without errors
- Keep dependencies minimal and scoped to the example folder
- Add a short note in this README’s “Repository structure” if you add a new folder

---

## Maintainers

This repository is maintained by the repository owner. If you’d like to collaborate, open an issue to discuss ideas or improvements.

---