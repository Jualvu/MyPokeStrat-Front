import axios from "axios"


export const deletePokemonFromDB = async (pokemonId: string) => {

    try{
        await axios.delete(`${import.meta.env.VITE_MYPOKESTRAT_API_URL}/api/v1/pokemon/${pokemonId}`)
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