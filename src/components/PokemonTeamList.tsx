import { PokemonInTeam } from "../utils/pokemonReducer"
import { PokemonSmallCard } from "./PokemonSmallCard"

export const PokemonTeamList = ({pokemonList = [], getSelectedPokemonOnClick}: 
    {
        pokemonList: PokemonInTeam[],
        getSelectedPokemonOnClick: (pokemonInTeam: PokemonInTeam) => void
    }) => {


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
            pokemonList ?
            pokemonList.map( (pokemonInTeam: PokemonInTeam) => {
                return (
                    <PokemonSmallCard
                    key={pokemonInTeam.id}
                    pokemonInTeam={pokemonInTeam}
                    onClickGetPokemon={getSelectedPokemonOnClick}/>
                )
            })
            :
            null
        }             

    </div>
  )
}
