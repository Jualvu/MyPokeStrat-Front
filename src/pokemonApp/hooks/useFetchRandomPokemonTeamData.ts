import { useState } from "react";
import Pokemon from "../types/PokemonType";
import axios from "axios";
import { PokeAPIResponse } from "../types/PokeAPIResponseType";

const useFetchRandomPokemonTeamData = () => {
  const [pokemonsFound, setPokemonsFound] = useState<Pokemon[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchTeam = async (): Promise<Pokemon[]> => {
    setLoading(true);
    const team: Pokemon[] = [];

    for (let i = 0; i < 6; i++) {
      const randomId = Math.floor(Math.random() * 1025) + 1;
      try {
        const { data: pokemon } = await axios.get<PokeAPIResponse>(
          `https://pokeapi.co/api/v2/pokemon/${randomId}`
        );
        team.push({
          id: pokemon.id,
          name: pokemon.name,
          img: pokemon.sprites.front_default,
          types: pokemon.types.map((t) => t.type.name),
        });
      } catch (err) {
        console.error(err);
      }
    }

    setPokemonsFound(team);
    setLoading(false);
    return team; // return so it can be used immediately
  };

  return {
    pokemonsFound,
    loading,
    fetchTeam,
  };
};

export default useFetchRandomPokemonTeamData;