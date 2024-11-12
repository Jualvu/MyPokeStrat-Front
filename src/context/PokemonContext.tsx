import { createContext } from "react";
import { PokemonInTeam } from "./pokemonReducer";
import Pokemon from "../types/PokemonType";

export type contextProperties = {
    pokemonTeamState: PokemonInTeam[] | undefined,
    handleNewPokemon: ( pokemon: Pokemon ) => void,
    handleRemovePokemon:( pokemonInTeam: PokemonInTeam ) => void
}
 

export const PokemonContext = createContext<contextProperties | null>(null);