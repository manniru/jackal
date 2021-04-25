import { createContext } from "react";

const ChannelsContext = createContext({
  show: true,
  setShow: () => {},
});

export default ChannelsContext;
