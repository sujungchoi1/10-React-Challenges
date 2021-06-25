// UserContext.js holds the context instance as well as create the context variables

import React, { useState, createContext} from 'react';

// creating context object
// Here, we exported UserContext which can be consumed by any child component of UserProvider. 
export const UserContext = createContext();

// This context provider is passed to any component requiring the context (via the 'value' in the provider to any subscriber)
export const UserProvider = ({ children }) => {
    const [name, setName] = useState("William");
    const [location, setLocation] = useState("Mars");

    return (
        <UserContext.Provider
            value={{
                name,
                location,
                setName,
                setLocation
            }}
        >
            {children}
        </UserContext.Provider>
    )
}
