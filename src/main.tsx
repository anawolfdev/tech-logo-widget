import React from "react";
import { createRoot } from "react-dom/client";
import LogoPage from "./LogoPage";
import './global.css';

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LogoPage />
  </React.StrictMode>
);
