import axios from "axios";
// import useFetch from "../hooks/useFetch";

// type DataType = {
//     results: {
//         name: string;
//     }[]
// }

type typeObject = {
    name:string
  }

const getPokemonNames = async()  => { 

    // const {data} = useFetch<DataType>(`https://pokeapi.co/api/v2/pokemon/`);


    // const pokeNamesList: string[] = data?.results;

    // const pokeNamesList: string[] = [];
    // data?.results?.map( (name: string) => {

    // })

    let pokeNames: string[] = [];

    await axios
    .get(`https://pokeapi.co/api/v2/pokemon/?limit=1302`)
        .then(({ data }) => {
            const names =  data.results.map( (pokemon: typeObject) => pokemon.name);
            pokeNames = names;
        })
        .catch( (error) => console.log(error));

    return pokeNames;
    // return pokeNamesList;
};


export default getPokemonNames;