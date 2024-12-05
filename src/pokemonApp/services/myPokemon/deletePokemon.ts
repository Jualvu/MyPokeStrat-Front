import axios from "axios"


export const deletePokemonFromDB = async (pokemonId: string) => {

    try{
        await axios.delete(`http://localhost:5000/api/v1/pokemon/${pokemonId}`)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })

    }catch(error) {
        console.log(error);
    }

}