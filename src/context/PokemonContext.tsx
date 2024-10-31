import { createContext, useState, useEffect } from "react";
import Pokemon from "../types/PokemonType";
// import axios from "axios";


//context posts type
export type PokemonContextType = {
    pokemonData: Pokemon[];
    isLoading: boolean;
};

//children type
type ContextProviderProps = {
    children: React.ReactNode;
  };

const PokemonContext = createContext<PokemonContextType | null >(null);

export const PokemonProvider = ({children}: ContextProviderProps) => {

    const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // useEffect(() => {
    //     axios
    //       .get(`https://pokeapi.co/api/v2/pokemon/${inputText}`)
    //       .then(({ data }) => {
    //         //handle success
    
    //         // setPokemonFound({
    //         //   id: data.id,
    //         //   name: data.name,
    //         //   img: data.sprites.front_default,
    //         //   type: data.types.map((type: typeObject) => {
    //         //     return type.name;
    //         //   }),
    //         // });
    
    //         // setLoading(false);
    //         // console.log(data);
    //       })
    //       .catch(function (error) {
    //         // handle error
    //         console.log(error);
    //       });
    //   }, [inputText]);

    useEffect( () => {
        fetchPokemonData();
    }, []);

    const fetchPokemonData = (): void => {
        setIsLoading(false);
        setPokemonData(pokemonData);
    }


  return (
    <PokemonContext.Provider
        value={{
            pokemonData,
            isLoading
        }}
    >
        {children}
    </PokemonContext.Provider>
  )
}

