import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { authReducerAction, authState, user } from "../types/authContextTypes"


const initialAuthState: authState = {
    logged: false,
        user: {
            name: ''
        }
}

const init = () => {
    const authStateJSON = localStorage.getItem('authState');
    const authState = authStateJSON ? JSON.parse(authStateJSON) : {};
    return authState ? authState : initialAuthState;
    
}

export const AuthProvider = ({children}: {children: React.ReactNode}) => {

    const [authState, dispatch] = useReducer(authReducer, initialAuthState, init );

    const logUser = (user: user) => {
        

        const action: authReducerAction = {
            type: '[AUTH] Log in user',
            payload: {
                logged: true,
                user: user
            }
        }

        localStorage.setItem('authState', JSON.stringify(action.payload));
        
        dispatch(action);

        
    }

    const logoutUser = () => {

        const action: authReducerAction ={
            type: '[AUTH] Log out user',
            payload: initialAuthState
        }

        localStorage.setItem('authState', JSON.stringify({
            logged: false,
            user: {
                name: ''
            }
        }));

        // const authState = authStateJSON ? JSON.parse(authStateJSON) : {};

        dispatch(action);
    }   


  return (
    <AuthContext.Provider value={{
        authState,
        logUser,
        logoutUser
    }}>

        {children}
    </AuthContext.Provider>
  )
}
