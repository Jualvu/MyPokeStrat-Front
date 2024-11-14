import { PokemonInTeam } from "../context/types/pokemonContextTypes"
import { PokemonSmallCard } from "./PokemonSmallCard"

export const PokemonTeamList = ({pokemonList = [], getSelectedPokemonOnClick, titleText}: 
    {
        pokemonList: PokemonInTeam[],
        getSelectedPokemonOnClick: (pokemonInTeam: PokemonInTeam) => void,
        titleText: string
    }) => {


  return (
    <div className="bg-indigo-950 w-7/12 min-h-dvh h-full
        inline-block justify-items-center rounded-3xl opacity-90 animate__animated animate__fadeInLeft">
        <div
        className="flex items-stretch">

        <h1 className="text-white text-xl mt-[20px]">
            {titleText}
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
