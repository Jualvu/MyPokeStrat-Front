import { PokemonAIReducerAction, PokemonTeamAndMessageList } from "../types/pokemonContextTypes";


export const pokemonAIReducer = (initialState: PokemonTeamAndMessageList = 
    { 
        pokemonAITeam: [{pokemon: {id: '', pokemon: {id: 0, name: '', img: '', types: ['']}}, 
        message: ''}]}
    , action: PokemonAIReducerAction
) => {
    
    switch( action.type ){
 
        case '[AIPOKEMON] New Pokemon Team and Message':
            return action.payload.pokemonTeamAndMessageList;

        default:
            return initialState;
    }

}
