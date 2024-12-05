import axios from "axios";
import Pokemon from "../../types/PokemonType";


export const addPokemon = (pokemon: Pokemon) => {

    try {

        const pokemonToAdd = {
            pokemonId: pokemon.id,
            pokemonName: pokemon.name,
            pokemonTypes: pokemon.types,
            pokemonImage: pokemon.img
          }
    
         axios.post('http://localhost:5000/api/v1/pokemon', pokemonToAdd)
       .then((response) => {
        console.log(response);
       })
       .catch((error) => {
        console.log(error);
       })


    }catch(error){
        console.log(error);
    }

}