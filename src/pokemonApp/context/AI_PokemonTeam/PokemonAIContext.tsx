import { createContext } from "react";
import { PokemonTeamAndMessageList } from "../types/pokemonContextTypes";

export type contextProperties = {
    pokemonAITeamState: PokemonTeamAndMessageList | undefined,
    createPokemonAITeam: (pokemonNameList: {pokemonTeam: string}) => void,
    createPokemonAITeamFromMyPokemon: (pokemonNameList: {pokemonTeam: string}) => void
}
 

export const PokemonAIContext = createContext<contextProperties | null>(null);