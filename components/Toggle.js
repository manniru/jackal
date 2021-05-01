import React from "react";

const Toggle = ({ theme, toggleTheme }) => (
  <button style={{ alignSelf: "center" }} onClick={toggleTheme}>
    Apply {theme === "dark" ? "light" : "dark"} mode
  </button>
);

export default Toggle;
