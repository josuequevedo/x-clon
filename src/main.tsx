import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { NavigationProvider } from "./context/NavigationContext.tsx";
import { DarkModeProvider } from "./context/useDarkMode.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NavigationProvider>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </NavigationProvider>
  </StrictMode>
);
