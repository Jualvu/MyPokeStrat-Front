import Pokemon from "../types/PokemonType";

export type Action = {
    type: string;
    payload: Pokemon;
}

export const pokemonReducer = (initialState: Pokemon[] = [], action: Action) => {
    
    switch( action.type){
        case '[POKEMON] Add Pokemon':
            if(initialState.length <= 6){
                return [...initialState, action.payload];
            }
            return initialState

        case '[POKEMON] Remove Pokemon':
            return initialState.filter( pokemon => pokemon.id !== action.payload.id);

        case '[POKEMON] Edit Pokemon':
            return [...initialState, action.payload];

        default:
            return initialState;
    }

    return
}
