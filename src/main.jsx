import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";
import { DadosProviderComponent } from "./contexts/DadosProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <DadosProviderComponent>
        <App />
      </DadosProviderComponent>
    </BrowserRouter>
  </StrictMode>
);
