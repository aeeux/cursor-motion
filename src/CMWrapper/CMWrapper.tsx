import React, { ReactNode } from "react";
import MouseContext from "../mouseContext";
import CursorMotion from "../CursorMotion";

interface CMProps {
  children: ReactNode;
}

const CMWrapper: React.FC<CMProps> = ({ children }) => {
  const [cursorText, setCursorText] = React.useState("");
  const [cursorVariant, setCursorVariant] = React.useState("default");

  return (
    <MouseContext.Provider
      value={{ cursorText, cursorVariant, setCursorText, setCursorVariant }}
    >
      <CursorMotion />
      {children}
    </MouseContext.Provider>
  );
};

export default CMWrapper;
