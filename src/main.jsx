import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";
import { DadosProviderComponent } from "./contexts/DadosProvider.jsx";
import ScrollToTop from "./components/ScrollToTop";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <DadosProviderComponent>
        <App />
      </DadosProviderComponent>
    </BrowserRouter>
  </StrictMode>
);
