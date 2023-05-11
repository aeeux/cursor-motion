// cursor.settings.ts

/*
⚠️ Warning

⚠️!! ONLY EDIT THIS FILE IF YOU KNOW WHAT YOU ARE DOING !!⚠️

⚠️ Warning
*/

import { useContext } from "react";
import MouseContext from "../mouseContext";
import { defaultVariants } from "../cursorMotion.settings";

const useCursorMotion = () => {
  const { setCursorText, setCursorVariant } = useContext(MouseContext);

  const customEnter = (variant: keyof typeof defaultVariants) => {
    const variantKey = variant as string;

    if (!defaultVariants[variantKey]) {
      setCursorText("");
      setCursorVariant("default");
      return;
    }

    const hoverText = defaultVariants[variantKey].hoverText;
    setCursorText(hoverText ? hoverText : "");
    setCursorVariant(variantKey);
  };

  const customLeave = () => {
    setCursorText("");
    setCursorVariant("default");
  };

  return { customEnter, customLeave };
};

export default useCursorMotion;
