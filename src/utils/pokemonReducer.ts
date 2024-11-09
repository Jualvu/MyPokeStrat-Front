import Pokemon from "../types/PokemonType";

export type PokemonInTeam = {
    id: string,
    pokemon: Pokemon;
}
 
export type Action = {
    type: string;
    payload: PokemonInTeam;
}

export const pokemonReducer = (initialState: PokemonInTeam[] = [], action: Action) => {
    
    switch( action.type){
        case '[POKEMON] Add Pokemon':
            if(initialState.length < 6){
                return [...initialState, action.payload];
            }
            return initialState

        case '[POKEMON] Remove Pokemon':
            return initialState.filter( (pokemonInTeam) => pokemonInTeam.id !== action.payload.id);

        default:
            return initialState;
    }

    return
}
