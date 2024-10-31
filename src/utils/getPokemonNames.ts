import axios from "axios";

type typeObject = {
    name:string
  }

const getPokemonNames = async() => { 

    let pokeNames: string[] = [];

    await axios
    .get(`https://pokeapi.co/api/v2/pokemon/?limit=1302`)
        .then(({ data }) => {
            const names =  data.results.map( (pokemon: typeObject) => pokemon.name);
            pokeNames = names;
        })
        .catch( (error) => console.log(error));

    return pokeNames;
};


export default getPokemonNames;