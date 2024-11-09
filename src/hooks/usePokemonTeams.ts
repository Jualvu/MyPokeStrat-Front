// import { useEffect, useReducer } from "react"
import { useReducer } from "react"
import { Action, PokemonInTeam, pokemonReducer } from "../utils/pokemonReducer"
import Pokemon from "../types/PokemonType";
import { v4 as uuidv4 } from 'uuid';

const init = () => {
    // return JSON.parse( localStorage.getItem('pokemonTeam') || '{}') || [];
    return []
}

export const usePokemonTeams = () => {
    //pokemonTeam == state
    const [ pokemonTeam, dispatch] = useReducer(pokemonReducer, [], init);
    
    // useEffect(() => {
    //     localStorage.setItem('pokemonTeam', JSON.stringify( pokemonTeam ) );
    //   }, [pokemonTeam])

    const handleNewPokemon = ( pokemon: Pokemon ) => {

        if( pokemon.id !== 0){
            const action: Action = {
                type: '[POKEMON] Add Pokemon',
                payload: {
                    id: uuidv4(),
                    pokemon: pokemon 
                }

            }
            dispatch( action );        
        }
        
    }

    const handleRemovePokemon = ( pokemonInTeam: PokemonInTeam ) => {
        const action: Action = {
            type: '[POKEMON] Remove Pokemon',
            payload: pokemonInTeam 
        }
        dispatch( action );        
    }


  return {
    
    pokemonTeam,

    handleNewPokemon,
    handleRemovePokemon

  }
}
