import { useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';
import { pokemonAIReducer } from "./pokemonAIReducer";
import { PokemonInTeam, PokemonAndMessage, PokemonAIReducerAction, PokemonTeamAndMessageList } from "../types/pokemonContextTypes";
import { PokemonAIContext } from "./PokemonAIContext";
import axios from "axios";
import { getAllPokemon } from "../../services/myPokemon/getAllPokemon";
import { PokemonFromDB } from "../../types/PokemonType";

const pokemonAITeam: PokemonTeamAndMessageList = {
    pokemonAITeam: []
};
        
const init = () => {
    return pokemonAITeam;
}


export const PokemonAIProvider = ({children}: {children: React.ReactNode}) => {

    const [ pokemonAITeamState, dispatch] = useReducer(pokemonAIReducer, pokemonAITeam, init);


    const createPokemonAITeam = (pokemonNameList: { pokemonTeam: string }) => {

        axios.post(`${import.meta.env.VITE_MYPOKESTRAT_API_URL}/api/v1/pokemonAITeam/generateTeamAnyPokemon`, pokemonNameList)
        .then( ({data}) => {
            const generatedResponseJSON = JSON.parse(data.data.content);
            const generatedPokemonTeam: PokemonAndMessage[] = [];
            console.log(generatedResponseJSON);

            // Generate pokemonTeam based on pokemonID list
            generatedResponseJSON?.pokemonTeam?.map( (pokemon: {pokemonID: number, message: string}) => {
                axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.pokemonID}`)
                .then(({data}) => {
                    
                    const pokemonInTeam:PokemonInTeam =
                    {
                        id: uuidv4(),
                        pokemon: {id: data?.id ? data?.id : 0,
                        name: data?.name ? data?.name : 'null',
                        img: data?.sprites?.front_default ? data?.sprites?.front_default : 'null',
                        types: data?.types ? data?.types?.map( ( {type}:{ type: { name: string} } ) => {
                            return (type?.name)
                            })
                            :
                            ['null']}
                    }

                    generatedPokemonTeam.push({
                        pokemon: pokemonInTeam, 
                        message: pokemon.message
                    });


                })
            })


            const generatedPokemonTeamAndMessages: PokemonTeamAndMessageList = {
                pokemonAITeam: generatedPokemonTeam
            }
            

            const action: PokemonAIReducerAction = {
                type: '[AIPOKEMON] New Pokemon Team and Message',
                payload: {
                    pokemonTeamAndMessageList: generatedPokemonTeamAndMessages
                }
            }


            dispatch( action );

        })
        .catch( (error) => {
            console.log(error.message);
        })
        
    }

    const createPokemonAITeamFromMyPokemon = async(pokemonNameList: { pokemonTeam: string }) => {

        const { pokemonListFromDB, hasError } = await getAllPokemon();
        if(hasError) return console.log('Error en BD');


        const myPokemonNameList = JSON.stringify(pokemonListFromDB.map( (pokemon: PokemonFromDB) => pokemon.pokemonName));

        const reqBody =  {
            pokemonTeam: pokemonNameList,
            myPokemon: myPokemonNameList
        }

        axios.post(`${import.meta.env.VITE_MYPOKESTRAT_API_URL}/api/v1/pokemonAITeam/generateTeamFromMyPokemon`, reqBody)
        .then( ({data}) => {
            const generatedResponseJSON = JSON.parse(data.data.content);
            const generatedPokemonTeam: PokemonAndMessage[] = [];
            console.log(generatedResponseJSON);

            // Generate pokemonTeam based on pokemonID list
            generatedResponseJSON?.pokemonTeam?.map( (pokemon: {pokemonID: number, message: string}) => {
                axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.pokemonID}`)
                .then(({data}) => {
                    
                    const pokemonInTeam:PokemonInTeam =
                    {
                        id: uuidv4(),
                        pokemon: {id: data?.id ? data?.id : 0,
                        name: data?.name ? data?.name : 'null',
                        img: data?.sprites?.front_default ? data?.sprites?.front_default : 'null',
                        types: data?.types ? data?.types?.map( ( {type}:{ type: { name: string} } ) => {
                            return (type?.name)
                            })
                            :
                            ['null']}
                    }

                    generatedPokemonTeam.push({
                        pokemon: pokemonInTeam, 
                        message: pokemon.message
                    });


                })
            })


            const generatedPokemonTeamAndMessages: PokemonTeamAndMessageList = {
                pokemonAITeam: generatedPokemonTeam
            }
            

            const action: PokemonAIReducerAction = {
                type: '[AIPOKEMON] New Pokemon Team and Message',
                payload: {
                    pokemonTeamAndMessageList: generatedPokemonTeamAndMessages
                }
            }


            dispatch( action );

        })
        .catch( (error) => {
            console.log(error.message);
        })
        
    }

  return (

    <PokemonAIContext.Provider value={{
        pokemonAITeamState,
        createPokemonAITeam,
        createPokemonAITeamFromMyPokemon
    }}>
        {children}
    </PokemonAIContext.Provider>
  )
}
