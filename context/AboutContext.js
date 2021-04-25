import { createContext } from "react";

const AboutContext = createContext({
  show: true,
  setShow: () => {},
});

export default AboutContext;
