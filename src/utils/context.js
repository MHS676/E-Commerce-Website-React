import React, { createContext } from 'react';

export const Context = createContext();

const AppContext = ({ children }) => {
    // Define the values you want to provide to the context
    const contextValues = {
        // Add your context values here
    };

    return (
        <Context.Provider value={contextValues}>
            {children}
        </Context.Provider>
    );
}

export default AppContext;
