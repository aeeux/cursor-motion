// generate-settings.js
const fs = require("fs");
const path = require("path");

const settingsTemplate = `

// cursorMotion.settings.ts
import { Variant, Transition } from "./package/index";

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

`;

const destinationPath = path.resolve(
  __dirname,
  "..",
  "cursorMotion.settings.ts"
);

fs.writeFile(destinationPath, settingsTemplate, (err) => {
  if (err) {
    console.error("Error creating cursorMotion.settings.ts file:", err);
  } else {
    console.log("Successfully created cursorMotion.settings.ts file");
  }
});
