import { Navigate, Route, Routes } from "react-router-dom"
import SearchPokemon from "../pages/SearchPokemon"
import Home from "../pages/Home"

export const MyPokeStratAppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/searchPokemon" element={<SearchPokemon/>}/>

        <Route path="/*" element={<Navigate to="/"/>}/>
    </Routes>
  )
}
