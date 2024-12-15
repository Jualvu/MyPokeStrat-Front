import { useContext } from "react"
import { AuthContext } from "../auth/context/AuthContext"
import { Navigate } from "react-router-dom";

export const PublicRoutes = ({children}: {children: React.ReactNode}) => {

    const { authState } = useContext(AuthContext) || {authState: {logged: false}};

  return (
    authState?.logged ? 
        <Navigate to={'/'}/>
        :
        children
  )
}
