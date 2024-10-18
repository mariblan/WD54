import { useState, useEffect } from "react";
import { media, sections } from "../assets/media.js";
import { AppContext } from ".";

const AppProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData({ media, sections });
  }, []);

  return <AppContext.Provider value={{ data }}>{children}</AppContext.Provider>;
};

export default AppProvider;
