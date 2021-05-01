import React from "react";

const Toggle = ({ theme, toggleTheme }) => (
  <button style={{ alignSelf: "center" }} onClick={toggleTheme}>
    {theme} mode
  </button>
);

export default Toggle;
