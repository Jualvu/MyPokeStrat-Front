import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { PokemonNamesType } from "../types/PokemonNamesType";

const useFetchPokemonNames = () => {

  const [isLoadingPokemonNames, setIsLoadingPokemonNames] = useState(true);
  const {data, isLoading} = useFetch<PokemonNamesType>(`https://pokeapi.co/api/v2/pokemon/?limit=1302`);

  
  const [pokemonNameList, setPokemonNameList] = useState<string[]>(['']);
  const [indexList, setIndexList] = useState<string[]>(['']);
  
  useEffect(() => {
    setIsLoadingPokemonNames(isLoading);

    // setPokemonNameList(valuesAndIndexList);
    //Fill pokemon Name list with names and indexes
    setPokemonNameList(
      data ?
        (
          data?.results.map( (pokemon, index) => {
            setIndexList([...indexList, index.toString()])
            return pokemon.name;
          })
        )
        :
        ['Error']
    ) 



  },[data, isLoading, indexList]);


  return {
    pokemonNameList,
    indexList,
    isLoadingPokemonNames
  } 
}

export default useFetchPokemonNames