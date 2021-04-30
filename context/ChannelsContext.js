import { createContext } from "react";

const ChannelsContext = createContext({
  showList: true,
  setShowList: () => {},
});

export default ChannelsContext;
