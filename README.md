# Web Dev Basics

[![Made with HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES202x-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Node.js >= 18](https://img.shields.io/badge/Node.js-%E2%89%A5%2018-339933?logo=node.js&logoColor=white)](https://nodejs.org/)

A curated set of small, focused exercises and mini-projects to **learn the foundations of modern frontend development**:

- **Semantic HTML** and clean document structure  
- **Modern CSS**: Flexbox, Grid, responsive design, and layout thinking  
- **Component libraries**: Bootstrap and Tailwind CSS (including dark mode and utility-first workflow)  
- **Introductory JavaScript**: variables, operations, and data types  
- **Real-world tooling**: Node.js, Tailwind CLI, Vite (React), and Next.js setups for beginners  

Use this repository as a **learning path** and **practice playground** for students or self‑learners who want to go from basic static pages to framework-based projects.

---

## Repository structure

Each directory is a self-contained example designed to practice a **specific concept**. Open the HTML directly for pure HTML/CSS demos, or install dependencies and run the dev server for Node-based ones.

- **CSS fundamentals** (visual design, layout & responsive thinking)
  - [css_01_login-page](css_01_login-page/) — HTML/CSS login form UI (forms, basic layout, inputs/buttons)
  - [css_02_navbar](css_02_navbar/) — Responsive navigation bar (horizontal layout, menus, hover states)
  - [css_03_flexbox](css_03_flexbox/) — Flexbox layout basics (axis, alignment, spacing)
  - [css_04_gridbox-basics](css_04_gridbox-basics/) — CSS Grid basics (rows, columns, gaps)
  - [css_05_gridbox-advanced](css_05_gridbox-advanced/) — CSS Grid advanced techniques (areas, complex layouts)
  - [css_06_mini-shop-practica](css_06_mini-shop-practica/) — Mini shop static pages (home, products, error) focusing on layout consistency and UI structure
  - [css_07_media-query](css_07_media-query/) — Media queries and responsive utilities (mobile-first design)
  - [css_08_bootstrap-basics](css_08_bootstrap-basics/) — Bootstrap components and layout (grid system, utilities, ready-made components)
  - [css_09_practica-pagina-estatica-bootstrap](css_09_practica-pagina-estatica-bootstrap/) — Static site with Bootstrap (building a small multi-section page)

- **Tailwind CSS** (utility-first CSS & modern workflows)
  - [css_12_tailwind-basic-installation](css_12_tailwind-basic-installation/) — Tailwind CLI build + BrowserSync (no framework): **installation, configuration, and build pipeline**
  - [css_13_tailwind-login-page](css_13_tailwind-login-page/) — Tailwind login page: **utility classes, spacing, colors, typography**
  - [css_14_tailwind-responsive-darkmode](css_14_tailwind-responsive-darkmode/) — Responsive Tailwind + dark mode + DaisyUI: **breakpoints, themes, and component styling**
  - [css_15_tailwind-layout-responsive](css_15_tailwind-layout-responsive/) — Tailwind v4 CLI, responsive layout: **layout composition and page structure**
  - **Framework integrations** (how Tailwind fits into modern JS frameworks):
    - [css_10_tailwind-vite-installation](css_10_tailwind-vite-installation/) — React + Vite + Tailwind v4 (see its [README](css_10_tailwind-vite-installation/README.md)): **project setup, dev server, and component-based UI**
    - [css_11_tailwind-nextjs-installation](css_11_tailwind-nextjs-installation/) — Next.js + Tailwind v4 (see its [README](css_11_tailwind-nextjs-installation/README.md)): **file-based routing and app structure**

- **JavaScript fundamentals** (core language concepts for beginners)
  - [js_01_basic-variables](js_01_basic-variables/) — Variables, `let`/`const`, naming, and basic usage
  - [js_02_operations](js_02_operations/) — Arithmetic, assignment, and logical operators in practice
  - [js_03_data-types](js_03_data-types/) — Primitives vs objects, type coercion, and basic debugging with `console.log`

---

## Why this project is useful

This repository is aimed at **students, bootcamp attendees, and self-taught developers** who need **hands-on practice**:

- Bite-sized, focused examples for **quick learning and reference**  
- Clear progression from **simple static pages** to **framework setups** (Vite/React, Next.js)  
- Side-by-side comparison of **layout techniques** (Flexbox vs Grid) and **CSS approaches** (plain CSS vs Bootstrap vs Tailwind)  
- Realistic dev workflows: Tailwind CLI, Vite, and Next.js so learners see **how real projects are structured and run**  
- Ready-to-run examples you can **tweak, break, and rebuild** to solidify concepts  

You can use it for:
- Classroom exercises
- Homework or practice sets
- Personal study roadmap for frontend basics

---

## Getting started

### Prerequisites

- For static HTML/CSS examples: **any modern browser**
- For Node-based examples (Tailwind CLI, Vite/React, Next.js):
  - Node.js 18+ and npm

Check your versions:
```bash
node -v
npm -v
```

### Run a specific example

Choose one directory below and follow the matching instructions.

1) **Pure HTML/CSS examples (no Node required)**  
- Examples: `css_01` to `css_09` (except where noted)  
- How to run:
  - Option A: Open the `index.html` file in your browser
  - Option B (optional local server):
    ```bash
    # Python 3
    python3 -m http.server 5173
    # then open http://localhost:5173 in your browser
    ```

2) **Tailwind CSS (CLI, no framework)**  
- Examples: `css_12_tailwind-basic-installation`, `css_13_tailwind-login-page`, `css_14_tailwind-responsive-darkmode`, `css_15_tailwind-layout-responsive`  
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

3) **React + Vite + Tailwind v4**  
- Example: `css_10_tailwind-vite-installation`  
- How to run:
  ```bash
  cd css_10_tailwind-vite-installation
  npm install
  npm run dev
  # Open the printed local URL (e.g., http://localhost:5173)
  ```
- Details: see [css_10_tailwind-vite-installation/README.md](css_10_tailwind-vite-installation/README.md)

4) **Next.js + Tailwind v4**  
- Example: `css_11_tailwind-nextjs-installation`  
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

Use this repo as a **practice map**:

- **Explore layout techniques**
  - [css_03_flexbox](css_03_flexbox/) to practice `display: flex` and alignment
  - [css_04_gridbox-basics](css_04_gridbox-basics/) and [css_05_gridbox-advanced](css_05_gridbox-advanced/) for grid layouts

- **Build responsive UIs**
  - [css_07_media-query](css_07_media-query/) with native CSS media queries
  - [css_14_tailwind-responsive-darkmode](css_14_tailwind-responsive-darkmode/) for Tailwind breakpoints + dark mode

- **Compare component libraries**
  - [css_08_bootstrap-basics](css_08_bootstrap-basics/) — Bootstrap components and utilities
  - [css_14_tailwind-responsive-darkmode](css_14_tailwind-responsive-darkmode/) — Tailwind + DaisyUI components

- **Learn JS fundamentals**
  - [js_01_basic-variables](js_01_basic-variables/) — variables
  - [js_02_operations](js_02_operations/) — operators and expressions
  - [js_03_data-types](js_03_data-types/) — types and coercion

You can combine these folders into small teaching modules or mini-courses.

---

## Scripts cheat sheet (by folder)

- **Tailwind CLI examples**
  - `npm run build` — one-off compile CSS
  - `npm run watch` — compile CSS in watch mode
  - `npm run serve` — static server + live reload (if present)
  - `npm run dev` — combined watch + serve (if present)

- **React + Vite**
  - `npm run dev` — start the dev server
  - `npm run build` — production build
  - `npm run preview` — preview production build locally
  - `npm run lint` — run ESLint (if configured)

- **Next.js**
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

Contributions are welcome, especially ones that **improve the learning experience**:

- Pick a folder and improve accessibility, responsiveness, or code clarity
- Add a new example demonstrating a specific **teachable concept** (e.g. forms, animations, basic DOM manipulation)
- Submit small, focused pull requests with a clear description

Recommended PR checklist:
- The example runs without errors
- Keep dependencies minimal and scoped to the example folder
- Add a short note in this README’s “Repository structure” if you add a new folder

---

## Maintainers

This repository is maintained by the repository owner. If you’d like to collaborate, open an issue to discuss ideas or improvements.
---
