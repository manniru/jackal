import { createContext } from "react";

const MenuContext = createContext({
  theme: "",
  channel: {},
  showFaq: false,
  showList: false,
  setChannel: () => {},
  setShowFaq: () => {},
  setShowList: () => {},
  toggleTheme: () => {},
  handleShowFaq: () => {},
  handleShowList: () => {},
});

export default MenuContext;
