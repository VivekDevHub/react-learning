import { createContext, useState } from "react";
import { useContext } from "react";
import { load, remove } from "../lib/LocalStorage";

let AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(load("logUser"));

    const logout = () => {
        remove("logUser");
    }

    const items = {
        user,
        setUser,
        logout
    }

    return <AuthContext.Provider value={items}>
        {children}
    </AuthContext.Provider>
}

export const useUserData = () => useContext(AuthContext);