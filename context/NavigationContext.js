import { createContext } from "react";

const NavigationContext = createContext({
  isEmpty: false,
  link: false,
  handleRandom: () => {},
  handleSubmit: () => {},
  handleLink: () => {},
  handleChange: () => {},
});

export default NavigationContext;
