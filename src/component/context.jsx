import { createContext, useState } from "react";

export const AuthContext = createContext()

export function AuthGuard({children}){
    const [isAdmin, setIsAdmin] = useState("no")
    
    return(
        <AuthContext.Provider value={{isAdmin, setIsAdmin}}>
            {children}
        </AuthContext.Provider>
    )
}