import { ReactNode } from "react";
export type NavigationContextType = {
  currentView: string;
  navigate: (view: string) => void;
};

export type NavigationProviderProps = {
  children: ReactNode;
};

export type DarkModeType = {
  isDarkMode: boolean;
  handleDarkMode: () => void;
};

export type DarkModeProviderProps = {
  children: ReactNode;
};
