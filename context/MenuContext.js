import { createContext } from "react";

const MenuContext = createContext({
  channel: {},
  setChannel: () => {},
  handleClearStorage: () => {},
});

export default MenuContext;
