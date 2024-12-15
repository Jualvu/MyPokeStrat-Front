import { createContext } from "react";
import { authState, user } from "../types/authContextTypes";

export type authContextProperties = {
    authState: authState | undefined,
    logUser: (user: user) => void,
    logoutUser: () => void,
}
 

export const AuthContext = createContext<authContextProperties | null>(null);