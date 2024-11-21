import { PokemonInTeam } from "../context/types/pokemonContextTypes"
import { PokemonSmallCard } from "./PokemonSmallCard"

export const PokemonTeamList = ({pokemonList = [], getSelectedPokemonOnClick, titleText, pokemonLeftCount}: 
    {
        pokemonList: PokemonInTeam[],
        getSelectedPokemonOnClick: (pokemonInTeam: PokemonInTeam) => void,
        titleText: string,
        pokemonLeftCount: boolean
    }) => {


  return (
    <div className="bg-indigo-950 w-7/12 min-h-dvh h-full
        inline-block rounded-3xl opacity-90 animate__animated animate__fadeInLeft">

        <div className="flex justify-center gap-11 mt-5 ml-10 mr-10 opacity-90">
            <h1 className="text-white text-xl">
                {titleText}
            </h1>

            {
                pokemonLeftCount ?
                
                    <h1 className="text-roseCustom text-xl font-bold">
                    {`Please add ${6 - pokemonList.length} Pokemon`}
                    </h1>
            
                :
                null
            }
        </div>

        <div className="inline-blovk justify-items-center">
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

    </div>
  )
}
