import { createContext, useState } from "react";
import React from "react";
export const GlobalContext = React.createContext(null)

export default function Context({ children }) {
    const [searchParam, setSearchParam] = useState('')

    return (<GlobalContext.Provider value={{ searchParam, setSearchParam }}>
        {children}
    </GlobalContext.Provider>
    );
}