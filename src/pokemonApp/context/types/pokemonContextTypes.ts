import Pokemon from "../../types/PokemonType";

export type PokemonInTeam = {
    id: string,
    pokemon: Pokemon;
}

export type PokemonAndMessage = {
    pokemon: PokemonInTeam,
    message: string
}

export type PokemonTeamAndMessageList = {
    pokemonAITeam: PokemonAndMessage[]
}
 


export type PokemonReducerAction = {
    type: string;
    payload: PokemonInTeam;
}

export type PokemonAIReducerAction = {
    type: string;
    payload: {
        pokemonTeamAndMessageList: PokemonTeamAndMessageList
    };
}


