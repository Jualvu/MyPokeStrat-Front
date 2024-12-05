

type Pokemon = {
  id: number;
  name: string;
  img: string;
  types: string[]
};

export type PokemonFromDB = {
  _id: string,
  pokemonId: number;
  pokemonName: string;
  pokemonImage: string;
  pokemonTypes: string[]
};



export default Pokemon;
