import { StrictMode, useEffect } from "react";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { PokemonProvider } from "./pokemonApp/context/PokemonTeamContext/PokemonProvider.tsx";
import { PokemonAIProvider } from "./pokemonApp/context/AI_PokemonTeam/PokemonAIProvider.tsx";
import { AppRouter } from "./router/AppRouter.tsx";
import getPokemonNameList from "./pokemonApp/helpers/getPokemonNameList.ts";
import { setAllPokemonIdData, setAllPokemonNameData } from "./pokemonApp/data/AllPokemonNameData";
import { AuthProvider } from "./auth/context/AuthProvider.tsx";


const App = ():JSX.Element => {

  //get all pokemon names and ids to fill the data once
  useEffect( () => {
    const {pokemonNameList, indexList, hasError} = getPokemonNameList();
    if (!hasError){
        setAllPokemonNameData(pokemonNameList);
        setAllPokemonIdData(indexList);
    }

  }, []);

    return(
    <StrictMode>
      <BrowserRouter>
      <AuthProvider>
        <PokemonProvider>
          <PokemonAIProvider>
            <AppRouter/>
          </PokemonAIProvider>
        </PokemonProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
    )
}

export default App