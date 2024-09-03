import { useState } from "react"
import { UserContext } from "./userContext"

// const user = {
//     id: 1212,
//     name: 'Abraham',
//     email: 'abraham@gmail.com'
// }

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState();

    return (
        // <UserContext.Provider value={{ user }} >
        <UserContext.Provider value={{ user, setUser }} >
            { children }
        </UserContext.Provider>
    )
}

