import { useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';
import { pokemonAIReducer } from "./pokemonAIReducer";
import { PokemonInTeam, PokemonTeamAndMessage, PokemonAIReducerAction } from "../types/pokemonContextTypes";
import { PokemonAIContext } from "./PokemonAIContext";
import axios from "axios";

const pokemonAITeam: PokemonTeamAndMessage = {
    pokemonTeam: [],
    message: ''
};

const init = () => {
    return pokemonAITeam;
}


export const PokemonAIProvider = ({children}: {children: React.ReactNode}) => {

    const [ pokemonAITeamState, dispatch] = useReducer(pokemonAIReducer, pokemonAITeam, init);


    const createPokemonAITeam = (pokemonIdList: { pokemonTeam: string }) => {
        axios.post("https://backend-open-ai-nu.vercel.app/api/v1/pokemonAITeam", pokemonIdList)
        .then( ({data}) => {
            const generatedResponseJSON = JSON.parse(data.data.content);
            const generatedPokemonTeam: PokemonInTeam[] = []

            //Generate pokemonTeam based on pokemonID list
            generatedResponseJSON.pokemonTeam.map( (pokemonId: number) => {
                axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
                .then(({data}) => {
                    
                    const pokemon:PokemonInTeam =
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
                    generatedPokemonTeam.push(pokemon);


                })
            })

            const generatedPokemonTeamAndMessage: PokemonTeamAndMessage = {
                pokemonTeam: generatedPokemonTeam,
                message: generatedResponseJSON.message
            }

            const action: PokemonAIReducerAction = {
                type: '[AIPOKEMON] New Pokemon Team and Message',
                payload: {
                    pokemonTeamAndMessage: generatedPokemonTeamAndMessage
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
        createPokemonAITeam
    }}>
        {children}
    </PokemonAIContext.Provider>
  )
}
