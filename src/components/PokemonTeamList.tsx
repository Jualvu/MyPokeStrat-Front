import Pokemon from "../types/PokemonType"
import { PokemonSmallCard } from "./PokemonSmallCard"

export const PokemonTeamList = ({pokemonList = []}: {pokemonList: Pokemon[]}) => {

    

  return (
    <div className="bg-indigo-950 w-[400px] h-[800px] 
        inline-block justify-items-center rounded-3xl opacity-90">
        <div
        className="flex items-stretch">

        <h1 className="text-white text-xl mt-[20px]">
            Rival's Team
        </h1>
            
        </div>
            
        {
            pokemonList.map( (pokemon: Pokemon) => {
                return (
                    <PokemonSmallCard
                    key={pokemon.id}
                    pokemon={pokemon}
                    getPokemon={(pokemon) => {}}/>
                )
            })
        }             

    </div>
  )
}
