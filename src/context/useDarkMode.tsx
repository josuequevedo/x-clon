import { createContext, useContext, useState } from "react";
import { DarkModeType, DarkModeProviderProps } from "./types";

const darkModeContext = createContext<DarkModeType | undefined>(undefined);

export const useDarkMode = (): DarkModeType => {
  const context = useContext(darkModeContext);
  if (context === undefined) {
    throw new Error("Ups looks like some were wrong");
  }

  return context;
};

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const handleDarkMode = (): void => {
    setIsDarkMode((prevState) => !prevState);
  };

  return (
    <darkModeContext.Provider value={{ isDarkMode, handleDarkMode }}>
      {children}
    </darkModeContext.Provider>
  );
};
