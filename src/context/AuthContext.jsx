import React, { createContext, useState} from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children}) => {
    const [user, setUser] = useState(null);

    const login = (username, password) => {
        //Mock Login Logic
        if(username === 'user' && password === 'password'){
            setUser ({ username});

        }
    };
    const logout = () => {
        setUser(null);
    };

    return(
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}
