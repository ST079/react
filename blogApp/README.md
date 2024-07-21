# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Hooks conditions

- you must import Hooks from react
- state generally refers to application data or properties that need to be tracked

# hooks rule

there are 3 rules for hooks

1. Hooks can only be called inside React function components
2. Hooks can only be called at the top level of components
3. Hooks cannot be conditional

note:Hooks will not work in react class components
