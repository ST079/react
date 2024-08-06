import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import UserConsumer from "../contexts/index.jsx";
import ThemeContext from "../contexts/theme.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContext>
      <App />
    </ThemeContext>
  </React.StrictMode>
);
