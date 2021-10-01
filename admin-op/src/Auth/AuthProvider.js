import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    let [user,setUser] = useState(window.localStorage.getItem('access_token')) || null

    const contextValue = {
        setUser,
        user,
        logout(){
            setUser(null)
            window.localStorage.removeItem('access_token')
        },
        islogged(){
            return !!user
        }
    }
    return(     
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;