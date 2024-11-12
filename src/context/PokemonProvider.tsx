import { useCallback, useReducer } from "react";
import { PokemonContext } from "./PokemonContext"
import { Action, PokemonInTeam, pokemonReducer } from "./pokemonReducer";
import Pokemon from "../types/PokemonType";
import { v4 as uuidv4 } from 'uuid';

const pokemonTeamSelected: PokemonInTeam[] = [];

const init = () => {
    // return JSON.parse( localStorage.getItem('pokemonTeam') || '{}') || [];
    return pokemonTeamSelected;
}



export const PokemonProvider = ({children}: {children: React.ReactNode}) => {

    const handleNewPokemon = useCallback(( pokemon: Pokemon ) => {

        if( pokemon.id !== 0){
            const action: Action = {
                type: '[POKEMON] Add Pokemon',
                payload: {
                    id: uuidv4(),
                    pokemon: pokemon 
                }

            }
            dispatch( action );        
        }},
        []
    )
    

    const handleRemovePokemon = useCallback(
        ( pokemonInTeam: PokemonInTeam ) => {
            const action: Action = {
                type: '[POKEMON] Remove Pokemon',
                payload: pokemonInTeam 
            }
            dispatch( action );        
        },
        []
    ) 

    const [ pokemonTeamState, dispatch] = useReducer(pokemonReducer, pokemonTeamSelected, init);

  return (

    <PokemonContext.Provider value={{
        pokemonTeamState,
        handleNewPokemon,
        handleRemovePokemon
    }}>
        {children}
    </PokemonContext.Provider>
  )
}
