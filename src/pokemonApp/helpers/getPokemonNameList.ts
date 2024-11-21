import axios from "axios";


const getPokemonNameList = () => {
    const pokemonNameList: string[] = [];
    const indexList: string[] = [];
    let hasError: boolean = false;
 
    const getPokemonNames = () => {
        axios
       .get(`https://pokeapi.co/api/v2/pokemon/?limit=1302`)
       .then( ({data}) => {
           data.results.map( (pokemon: {name: string} , index: number) => {
               pokemonNameList.push(pokemon.name);
               indexList.push(index.toString());
             })
           
       })
       .catch(() => {
           hasError = true;
       })
    }

    getPokemonNames();

    return {
        pokemonNameList,
        indexList,
        hasError
    } 
  
}

export default getPokemonNameList