import { useEffect, useReducer } from "react"
import { Action, pokemonReducer } from "../utils/pokemonReducer"
import Pokemon from "../types/PokemonType";

const init = () => {
    return JSON.parse( localStorage.getItem('pokemonTeam') || '{}') || [];
}

export const usePokemonTeams = () => {
    //pokemonTeam == state
    const [ pokemonTeam, dispatch] = useReducer(pokemonReducer, [], init);
    
    useEffect(() => {
        localStorage.setItem('pokemonTeam', JSON.stringify( pokemonTeam ) );
      }, [pokemonTeam])

    const handleNewPokemon = ( pokemon: Pokemon ) => {

        if( pokemon.id !== 0){
            const action: Action = {
                type: '[POKEMON] Add Pokemon',
                payload: pokemon 
            }
            dispatch( action );        
        }
        
    }

    const handleRemovePokemon = ( pokemon: Pokemon ) => {
        if( pokemon.id !== 0){
            const action: Action = {
                type: '[POKEMON] Remove Pokemon',
                payload: pokemon 
            }
            dispatch( action );        
        }

    }
    const handleEditPokemon = ( pokemon: Pokemon ) => {

        if( pokemon.id !== 0){
            const action: Action = {
                type: '[POKEMON] Edit Pokemon',
                payload: pokemon 
            }
            dispatch( action );        
        }
        

    }

  return {
    
    pokemonTeam,

    handleNewPokemon,
    handleRemovePokemon,
    handleEditPokemon

  }
}
