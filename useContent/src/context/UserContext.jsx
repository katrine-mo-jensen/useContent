import { createContext, useEffect, useState } from "react";

// Opret selve UserContext fra Reacts CreateContext
export const UserContext = createContext(null)

// Opret userContext Provideren - Tager imode children fordi den "wrapper" hele vores app
export const UserContextProvider = ({children}) => {

    // State til at holde styr på brugeren.
    const [user, setUser] = useState(null)

    // UseEffect der kører når user ændres
    // Hvis user findes sættes user som JSON i localStorage
    // Ellers hvis user findes i localStorage allerede sættes den JSON til vores user State
    useEffect(() => {
        if (user){
            localStorage.setItem('user', JSON.stringify(user))
        }
        else if(localStorage.getItem('user')){
            setUser(JSON.parse(localStorage.getItem('user')))
        }
    },[user])

    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}