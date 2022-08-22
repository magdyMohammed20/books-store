import React from 'react';
import { createContext, useState } from "react";

export const AppContext = createContext()

const AppProvider = ({ children }) => {
    const [books, setBooks] = useState({})

    return <AppContext.Provider value={{ books, setBooks }} >
        {children}
    </AppContext.Provider>
}

export default AppProvider