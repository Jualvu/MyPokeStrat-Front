import { createContext } from "react";
import { PokemonTeamAndMessage } from "../types/pokemonContextTypes";

export type contextProperties = {
    pokemonAITeamState: PokemonTeamAndMessage | undefined,
    createPokemonAITeam: (pokemonIdList: {
        pokemonTeam: string
    }) => void
}
 

export const PokemonAIContext = createContext<contextProperties | null>(null);