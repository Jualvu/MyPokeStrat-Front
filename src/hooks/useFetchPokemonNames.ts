import { useEffect, useState } from "react";
import getPokemonNames from "../utils/getPokemonNames";

const useFetchPokemonNames = () => {

  const [pokeNamesList, setPokeNamesList] = useState<string[]>([]);
  const [isLoadingPokeNames, setIsLoadingPokeNames] = useState<boolean>(true);

  const getPokeNames = async() => {
    const namesList = await getPokemonNames();
    setPokeNamesList(namesList);
    setIsLoadingPokeNames(false);
  }

  useEffect(() => {
    getPokeNames();
  }, [])


  return {
    pokeNamesList,
    isLoadingPokeNames
  } 
}

export default useFetchPokemonNames