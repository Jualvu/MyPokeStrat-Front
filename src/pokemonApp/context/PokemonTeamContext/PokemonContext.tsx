import { createContext } from "react";
import Pokemon from "../../types/PokemonType";
import { PokemonInTeam } from "../types/pokemonContextTypes";

export type contextProperties = {
    pokemonTeamState: PokemonInTeam[] | undefined,
    handleNewPokemon: ( pokemon: Pokemon ) => void,
    handleRemovePokemon:( pokemonInTeam: PokemonInTeam ) => void
}


export const PokemonContext = createContext<contextProperties | null>(null);