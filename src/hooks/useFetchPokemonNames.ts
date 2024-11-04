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

    //Fill Index list with every index
    setIndexList(
      data ?
        (
          data?.results.map( (pokemon, index) => {
            return index.toString();
          })
        )
        :
        ['Error']
    )


    // setPokemonNameList(valuesAndIndexList);
    //Fill pokemon Name list with names
    setPokemonNameList(
      data ?
        (
          data?.results.map( (pokemon) => {
            return pokemon.name;
          })
        )
        :
        ['Error']
    ) 



  },[data, isLoading]);


  return {
    pokemonNameList,
    indexList,
    isLoadingPokemonNames
  } 
}

export default useFetchPokemonNames