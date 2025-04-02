import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import React from "react";
import { GlobalStyles } from "./styles/globalStyled";

createRoot(document.getElementById("root")!).render(
  <>
    <GlobalStyles />
    <App />
  </>
);
