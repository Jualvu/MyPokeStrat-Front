
type Types = {
  type: {
      name: string;
      url: string; 
      }
}

export type DataPokemon = {
  id: number;
  name: string;
  sprites: { front_default: string | null; };
  types: Types[];
}