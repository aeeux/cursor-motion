// cursorMotion.settings.ts
export interface Variant {
  x?: number;
  y?: number;
  transition?: Transition;
  opacity: number;
  height: number;
  width: number;
  fontSize: string;
  backgroundColor: string;
  hoverText: string;
  color?: string;
}

export interface Variants {
  [key: string]: Variant;
}

export interface Transition {
  type: string;
  stiffness: number;
  damping: number;
}

export const defaultVariants: { [key: string]: Variant } = {
  // Default is the cursor setting when not hovering anything
  default: {
    opacity: 1,
    height: 25,
    width: 25,
    fontSize: "16px",
    backgroundColor: "#1e91d6",
    hoverText: "", // Recommended to keep this one blank
  },
  // Custom Objects defined below are the effects when hovering something
  example1: {
    opacity: 1,
    backgroundColor: "#BCFFD9",
    color: "#000",
    height: 60,
    width: 60,
    fontSize: "18px",
    hoverText: "🎉",
  },
  example2: {
    opacity: 1,
    backgroundColor: "#FFBCBC",
    color: "#000",
    height: 40,
    width: 40,
    fontSize: "24px",
    hoverText: "🚀",
  },
  example3: {
    opacity: 1,
    backgroundColor: "#BCD4FF",
    color: "#000",
    height: 80,
    width: 80,
    fontSize: "18px",
    hoverText: "🌟",
  },
};

export const defaultSpring: Transition = {
  type: "spring",
  stiffness: 500,
  damping: 28,
};
