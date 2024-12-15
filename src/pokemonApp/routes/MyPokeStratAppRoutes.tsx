import { Navigate, Route, Routes } from "react-router-dom"
import MyPokemon from "../pages/MyPokemon"
import Home from "../pages/Home"

export const MyPokeStratAppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/myPokemon" element={<MyPokemon/>}/>

        <Route path="/*" element={<Navigate to="/"/>}/>
    </Routes>
  )
}
