// CursorMotion.tsx
import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import MouseContext from "../mouseContext";
import { defaultVariants, defaultSpring } from "../cursorMotion.settings";
import { Variants } from "../cursorMotion.settings";

const CursorMotion: React.FC = () => {
  const { cursorText, cursorVariant } = useContext(MouseContext);

  const [mouseXPosition, setMouseXPosition] = useState(0);
  const [mouseYPosition, setMouseYPosition] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseXPosition(e.clientX);
      setMouseYPosition(e.clientY);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const variants: Variants = {};

  for (const key in defaultVariants) {
    if (defaultVariants.hasOwnProperty(key)) {
      const variantKey = key as keyof typeof defaultVariants;
      variants[variantKey] = {
        ...defaultVariants[variantKey],
        x: mouseXPosition - defaultVariants[variantKey].width / 2,
        y: mouseYPosition - defaultVariants[variantKey].height / 2,
        transition: defaultSpring,
      };
    }
  }

  return (
    <motion.div
      variants={variants}
      className="cursorCircle"
      animate={cursorVariant}
      transition={defaultSpring}
      initial={false}
      style={{
        x: mouseXPosition,
        y: mouseYPosition,
      }}
    >
      <span className="cursorInner">{cursorText}</span>
    </motion.div>
  );
};

export default CursorMotion;
