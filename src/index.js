import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BasketProvider } from "./contexts/basket";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BasketProvider>
    <App />
  </BasketProvider>
);
