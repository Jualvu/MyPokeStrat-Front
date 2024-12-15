import axios from "axios";


export const getAllPokemon = async() => {

    let isLoading = true;
    let hasError = false;
    try{
        const pokemonList = await axios.get(`${import.meta.env.VITE_MYPOKESTRAT_API_URL}/api/v1/pokemon`);
        isLoading = false;
        return { pokemonListFromDB: pokemonList.data.data , isLoadingPokemonFromDB: isLoading, hasError };
    }catch(error){
        console.log(error);
        hasError = true;
        return { pokemonListFromDB: 'error' , isLoadingPokemonFromDB: false, hasError };
    }

}