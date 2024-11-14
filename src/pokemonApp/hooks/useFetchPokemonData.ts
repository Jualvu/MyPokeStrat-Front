import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import Pokemon from "../types/PokemonType";
import { DataPokemon } from "../types/PokemonInfoType";

const useFetchPokemonData = ( pokemonName: string ) => {

  const [isLoadingPokemonData, setIsLoadingPokemonData] = useState(true);
  const {data, isLoading} = useFetch<DataPokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);


  const [pokemonFound, setPokemonFound] = useState<Pokemon | null>();
  
  useEffect(() => {
    setIsLoadingPokemonData(isLoading);

    setPokemonFound( 
        {
            id: data?.id ? data?.id : 0,
            name: data?.name ? data?.name : 'null',
            img: data?.sprites?.front_default ? data?.sprites?.front_default : 'null',
            types: data?.types ? data?.types?.map( ( {type}:{ type: { name: string} } ) => {
                return (type?.name)
                })
                :
                ['null']
        }
    )

    // setPokemonFound(
    //     data ?
    //     (
    //         {
    //             id: data?.id,
    //             name: data?.name,
    //             img: data?.sprites?.front_default,
    //             tpyes: data?.types?.map( ( {type}:{ type: { name: string} } ) => {
    //                 return (type?.name)
    //                 })
    //         }
    //     ):
    //     null
    // )

    // const pokeFound: Pokemon = {
    //     id: data?.id,
    //     name: data?.name,
    //     img: data?.sprites?.front_default,
    //     tpyes: data?.types?.map( ( {type}:{ type: { name: string} } ) => {
    //         return (type?.name)
    //         })
    // }

  },[data, isLoading]);


  return {
    pokemonFound,
    isLoadingPokemonData
  } 
}

export default useFetchPokemonData