import { createContext } from "react";

const AboutContext = createContext({
  showFaq: true,
  setShowFaq: () => {},
});

export default AboutContext;
