import { useContext, createContext, useState, ReactNode } from "react";
import React from "react";

type ContextType = {
  isPopup: boolean;
  togglePopup: () => void;
};

export const Context = createContext<ContextType | null>(null);

export const useDataContext = () => {
  const context = useContext<ContextType | null>(Context);
  if (!context) {
    throw new Error("Tell me how you produced this bug please :( - Raiden");
  }
  return context;
};

export const PopupProvider = ({ children }: { children: ReactNode }) => {
  const [isPopup, setIsPopup] = useState<boolean>(false);

  const togglePopup = () => {
    setIsPopup((prev) => !prev);
  };
  return (
    <Context.Provider value={{ isPopup, togglePopup }}>
      {children}
    </Context.Provider>
  );
};
