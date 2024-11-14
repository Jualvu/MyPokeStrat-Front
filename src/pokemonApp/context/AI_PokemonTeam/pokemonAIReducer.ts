import { PokemonAIReducerAction, PokemonTeamAndMessage } from "../types/pokemonContextTypes";


export const pokemonAIReducer = (initialState: PokemonTeamAndMessage = { pokemonTeam: [], message: ''}, action: PokemonAIReducerAction) => {
    
    switch( action.type ){
        // case '[AIPOKEMON] Add Pokemon':
        //     if(initialState.pokemonTeam?.length < 6){
        //         return initialState.pokemonTeam = [...initialState.pokemonTeam, action.payload.pokemonInTeam];
        //     }
        //     return initialState;
            
        case '[AIPOKEMON] New Pokemon Team and Message':
            return action.payload.pokemonTeamAndMessage;
            // return {
            //     pokemonTeam: action.payload.pokemonTeamAndMessage.pokemonTeam,
            //     message: action.payload.pokemonTeamAndMessage.message
            // };
            

        // case '[AIPOKEMON] Add Message':
        //     return initialState.message = action.payload.message;

        // case '[AIPOKEMON] Clean Pokemon Team':
        //     return { pokemonTeam: [], message: ''};

        default:
            return initialState;
    }

}
