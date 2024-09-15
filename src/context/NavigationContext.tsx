import { createContext, useState, useEffect, useContext } from "react";
import { NavigationContextType, NavigationProviderProps } from "./types";

const NavigationContext = createContext<NavigationContextType | undefined>(
  undefined
);

export const useNavigation = (): NavigationContextType => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error("useNavigation must be used wihin a NavigationProvider");
  }
  return context;
};

export const NavigationProvider: React.FC<NavigationProviderProps> = ({
  children,
}) => {
  const [currentView, setCurrentView] = useState<string>("home");

  useEffect(() => {
    const handlePopState = (): void => {
      const path = window.location.pathname.substring(1); // Obtiene la ruta actual
      setCurrentView(path || "home"); // Actualiza la vista actual
    };

    window.addEventListener("popstate", handlePopState);

    return (): void => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const url = window.location.pathname.substring(1);
  useEffect(() => {
    const pathName = url[0]?.toUpperCase() + url?.slice(1);
    document.title = `${pathName} / X`;

    return (): void => {
      document.title = `Home / X`;
    };
  }, [url]);

  const navigate = (view: string): void => {
    setCurrentView(view);
    window.history.pushState({}, "", view);
  };

  return (
    <NavigationContext.Provider value={{ currentView, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};
