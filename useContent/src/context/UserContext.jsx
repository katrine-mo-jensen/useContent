import {createContext, useEffect, useState} from "react"

export const UserContext = createContext(null)

export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null)

    useEffect(()  => {
        console.log("user has changed - yay", user)
    }, [user])

    return (
        <UserContext.Provider value={{user,setUser}}> 
        {children}
        </UserContext.Provider>
    )
    



}