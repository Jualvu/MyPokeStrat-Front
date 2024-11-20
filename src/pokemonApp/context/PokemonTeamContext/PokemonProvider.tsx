import { useCallback, useReducer } from "react";
import { PokemonContext } from "./PokemonContext"
import { pokemonReducer } from "./pokemonReducer";
import Pokemon from "../../types/PokemonType";
import { v4 as uuidv4 } from 'uuid';
import { PokemonReducerAction, PokemonInTeam } from "../types/pokemonContextTypes";

const pokemonTeamSelected: PokemonInTeam[] = [];

const init = () => {
    return pokemonTeamSelected;
}



export const PokemonProvider = ({children}: {children: React.ReactNode}) => {

     
    const [ pokemonTeamState, dispatch] = useReducer(pokemonReducer, pokemonTeamSelected, init);

    const handleNewPokemon = useCallback(( pokemon: Pokemon ) => {

        if( pokemon.id !== 0){
            const action: PokemonReducerAction = {
                type: '[POKEMON] Add Pokemon',
                payload: {
                    id: uuidv4(),
                    pokemon: pokemon 
                }

            }
            dispatch( action );        
        }},[])
    

    const handleRemovePokemon = useCallback(
        ( pokemonInTeam: PokemonInTeam ) => {
            const action: PokemonReducerAction = {
                type: '[POKEMON] Remove Pokemon',
                payload: pokemonInTeam 
            }
            dispatch( action );        
        },[]) 


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
