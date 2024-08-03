import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import UserConsumer from "../contexts/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserConsumer>
      <App />
    </UserConsumer>
  </React.StrictMode>
);
