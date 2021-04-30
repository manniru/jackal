import { createContext } from "react";

const MenuContext = createContext({
  channel: {},
  setChannel: () => {},
  handleClearStorage: () => {},
  showFaq: false,
  setShowFaq: () => {},
  handleShowFaq: () => {},
  showList: false,
  setShowList: () => {},
  handleShowList: () => {},
});

export default MenuContext;
