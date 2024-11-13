import { StrictMode } from "react";
import Home from "./pages/Home.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header.tsx";
import SearchPokemon from "./pages/SearchPokemon.tsx";
import { PokemonProvider } from "./context/PokemonTeamContext/PokemonProvider.tsx";
import { PokemonAIProvider } from "./context/AI_PokemonTeam/PokemonAIProvider.tsx";


const App = ():JSX.Element => {
    return(
    <StrictMode>
    <PokemonProvider>
      <PokemonAIProvider>
        <BrowserRouter>
          <Routes>

            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Home />
                </>
              }
            ></Route>

            <Route
              path="/searchPokemon"
              element={
                <>
                  <Header />
                  <SearchPokemon />
                </>
              }
            ></Route>

          </Routes>
        </BrowserRouter>
      </PokemonAIProvider>
    </PokemonProvider>
  </StrictMode>
    )
}

export default App