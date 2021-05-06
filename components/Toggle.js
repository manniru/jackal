import React from "react";

const Toggle = ({ theme, toggleTheme }) => (
  <button style={{ alignSelf: "center" }} onClick={toggleTheme}>
    Switch to {theme === "dark" ? "Light" : "Dark"} Theme
  </button>
);

export default Toggle;
