# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## How to run

Step 1: Install Dependencies

Open a terminal in VS Code (Terminal → New Terminal) and run:

"npm install"


This installs React, Vite, and all dependencies listed in package.json.

Step 2: Start the Development Server

Run:

"npm run dev"


Vite will start a local development server.

In the terminal, you’ll see something like:

  VITE v5.x.x  ready in 300 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose

Step 3: Open in Browser

Open your browser.

Go to the Local URL from terminal (usually http://localhost:5173/).

You should see:

Bible Verse Finder

Random Verse button → click to get a random verse.

Input box → type a verse like John 3:16 and click “Get Verse”.
