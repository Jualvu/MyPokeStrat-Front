import { StrictMode } from "react";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { PokemonProvider } from "./pokemonApp/context/PokemonTeamContext/PokemonProvider.tsx";
import { PokemonAIProvider } from "./pokemonApp/context/AI_PokemonTeam/PokemonAIProvider.tsx";
import { AppRouter } from "./router/AppRouter.tsx";


const App = ():JSX.Element => {
    return(
    <StrictMode>
      <BrowserRouter>
        <PokemonProvider>
          <PokemonAIProvider>
            <AppRouter/>
          </PokemonAIProvider>
        </PokemonProvider>
    </BrowserRouter>
  </StrictMode>
    )
}

export default App