import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const useApp = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
    const [state, setState] = useState(null);
    const [counter, setCounter] = useState(0);
    return(
        <AppContext.Provider value={{state, setState, counter, setCounter}}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContextProvider, useApp};