import { createContext } from "react";

interface MouseContextType {
  cursorText: string;
  cursorVariant: string;
  setCursorText: (text: string) => void;
  setCursorVariant: (variant: string) => void;
}

const defaultMouseContext: MouseContextType = {
  cursorText: "",
  cursorVariant: "default",
  setCursorText: () => {},
  setCursorVariant: () => {},
};

const MouseContext = createContext<MouseContextType>(defaultMouseContext);

export default MouseContext;
