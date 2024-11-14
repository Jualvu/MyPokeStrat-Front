import Pokemon from "../../types/PokemonType";

export type PokemonInTeam = {
    id: string,
    pokemon: Pokemon;
}

export type PokemonTeamAndMessage = {
    pokemonTeam: PokemonInTeam[],
    message: string
}
 
export type PokemonReducerAction = {
    type: string;
    payload: PokemonInTeam;
}

// export type PokemonAIReducerAction = {
//     type: string;
//     payload: {
//         pokemonInTeam: PokemonInTeam,
//         message: string;
//     };
// }

export type PokemonAIReducerAction = {
    type: string;
    payload: {
        pokemonTeamAndMessage: PokemonTeamAndMessage
    };
}


