# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- WaterCSS is used for default styling. It is imported in `index.html`.

- .gitignore file created by https://www.toptal.com/developers/gitignore/api/node,react

## File Structure

- `public` folder contains static files such as images, favicon, etc. that are served as-is and are not processed by Vite. The contents of this folder are copied as-is into the root of the build directory.
- `src` folder contains all the source code
  - `src/assets` folder contains files that go through Vite's import analysis and can be processed by Vite. Use for assets that would be referenced in JavaScript, CSS, or HTML files (eg. images, fonts).
  - `src/components` folder contains all the React components
  - `src/App.jsx` is the root component

## How to Setup New Project

1. Clone this repository - Done
2. Delete `.git` folder - Done
3. Run `npm install` to install dependencies - Done
4. Update `package.json` with your project details - Done
5. Update title in `index.html` - Done
6. Update `README.md`
7. Update `LICENSE`
8. Update favicon in `public` folder
9. Add global styles to `src/index.css` - Done