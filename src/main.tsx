import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { MycounterApp } from "./counter/components/MycounterApp.tsx";
// import { GifsApp } from "./GifsApp.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <GifsApp /> */}
    <MycounterApp />
  </StrictMode>,
);
