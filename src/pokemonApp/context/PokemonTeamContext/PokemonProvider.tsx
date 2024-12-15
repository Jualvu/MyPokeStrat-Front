import { useCallback, useReducer } from "react";
import { PokemonContext } from "./PokemonContext"
import { pokemonReducer } from "./pokemonReducer";
import Pokemon from "../../types/PokemonType";
import { v4 as uuidv4 } from 'uuid';
import { PokemonReducerAction, PokemonInTeam } from "../types/pokemonContextTypes";

const pokemonTeamSelected: PokemonInTeam[] = [];

const init = () => {
    const rivalTeamArray = localStorage.getItem('rivalPokemonTeam');
    const rivalPokeArray = rivalTeamArray ? JSON.parse(rivalTeamArray) : [];
    return rivalPokeArray ? rivalPokeArray : pokemonTeamSelected;
    // return pokemonTeamSelected;
}



export const PokemonProvider = ({children}: {children: React.ReactNode}) => {

     
    const [ pokemonTeamState, dispatch] = useReducer(pokemonReducer, pokemonTeamSelected, init);

    const handleNewPokemon = useCallback(( pokemon: Pokemon ) => {

        if( pokemon.id !== 0){

            const newId = uuidv4();

            const action: PokemonReducerAction = {
                type: '[POKEMON] Add Pokemon',
                payload: {
                    id: newId,
                    pokemon: pokemon 
                }

            }
            const storagedRivalTeam = localStorage.getItem('rivalPokemonTeam');
            const pokeArray = storagedRivalTeam ? JSON.parse(storagedRivalTeam) : [];
            pokeArray.push( {
                id: newId,
                pokemon: pokemon 
            }
)
            localStorage.setItem('rivalPokemonTeam', JSON.stringify(pokeArray));
            dispatch( action );        
        }},[])
    

    const handleRemovePokemon = useCallback(
        ( pokemonInTeam: PokemonInTeam ) => {
            const action: PokemonReducerAction = {
                type: '[POKEMON] Remove Pokemon',
                payload: pokemonInTeam 
            }

            const storagedRivalTeam = localStorage.getItem('rivalPokemonTeam');
            const pokeArray = storagedRivalTeam ? JSON.parse(storagedRivalTeam) : [];
            const updatedPokemons = pokeArray.filter(
            (pokemon: PokemonInTeam) => pokemon.id !== pokemonInTeam.id 
            );
            localStorage.setItem('rivalPokemonTeam', JSON.stringify(updatedPokemons));


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
