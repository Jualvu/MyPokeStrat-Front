import axios from "axios";


export const getAllPokemon = async() => {

    let isLoading = true;
    let hasError = false;
    try{
        const pokemonList = await axios.get('http://localhost:5000/api/v1/pokemon');
        isLoading = false;
        return { pokemonListFromDB: pokemonList.data.data , isLoadingPokemonFromDB: isLoading, hasError };
    }catch(error){
        console.log(error);
        hasError = true;
        return { pokemonListFromDB: 'error' , isLoadingPokemonFromDB: false, hasError };
    }

}