import { useContext } from "react"
import { AuthContext } from "../auth/context/AuthContext"
import { Navigate } from "react-router-dom";

export const PrivateRoutes = ({children}: {children: React.ReactNode}) => {

    const { authState } = useContext(AuthContext) || {authState: {logged: false}};

  return (
    authState?.logged ? 
    children
    :
    <Navigate to={'/auth/login'}/>
  )
}