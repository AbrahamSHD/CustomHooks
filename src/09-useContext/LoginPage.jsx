import { useContext } from "react"
import { UserContext } from "./context/userContext";

export const LoginPage = () => {

    const { user, setUser } = useContext( UserContext );

    return (
        <>
            <h1>LoginPage</h1>
            <hr />

            <pre aria-label="pre" >
                {
                    JSON.stringify( user, null, 3 )
                }
            </pre>

            <button 
                onClick={ () => setUser({ id: 1321, name: 'Abraham', email: 'abraham@gmail.com' }) }
                className="btn btn-primary">
                Establecer Usuario
            </button>

        </>
    )
}
