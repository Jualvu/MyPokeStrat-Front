import { Route, Routes } from "react-router-dom"
import { MyPokeStratAppRoutes } from '../pokemonApp/routes/MyPokeStratAppRoutes'
import { AuthRoutes } from "../auth/routes/AuthRoutes"

export const AppRouter = () => {
  return (
    
    <Routes>

        {/* Login y registro */}
        <Route path="/auth/*" element={ <AuthRoutes/> }/>

        {/* MyPokeStrat App  */}
        <Route path="/*" element={ <MyPokeStratAppRoutes/> }/>
        


    </Routes>

    )
}
