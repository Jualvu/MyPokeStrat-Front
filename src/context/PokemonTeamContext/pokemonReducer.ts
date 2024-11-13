import { PokemonReducerAction, PokemonInTeam } from "../types/pokemonContextTypes";

export const pokemonReducer = (initialState: PokemonInTeam[] = [], action: PokemonReducerAction) => {
     
    switch( action.type){
        case '[POKEMON] Add Pokemon':
            if(initialState.length < 6){
                return [...initialState, action.payload];
            }
            return initialState;

        case '[POKEMON] Remove Pokemon':
            return initialState.filter( (pokemonInTeam) => pokemonInTeam.id !== action.payload.id);

        default:
            return initialState;
    }

}
