import { PokemonInTeam } from "../context/types/pokemonContextTypes"
import { PokemonSmallCard } from "./PokemonSmallCard"

export const PokemonAITeamList = ({pokemonList = [], getSelectedPokemonOnClick, titleText}: 
    {
        pokemonList: PokemonInTeam[],
        getSelectedPokemonOnClick: (pokemonInTeam: PokemonInTeam) => void,
        titleText: string,
    }) => {


  return (
    <div className="bg-indigo-950 w-full min-h-dvh h-full
        grid rounded-3xl opacity-90 animate__animated animate__fadeInLeft">

        <div className="flex justify-center gap-8 mt-5 ml-10 mr-10 opacity-90">
            <h1 className="text-white text-xl">
                {titleText}
            </h1>
        </div>

        <div className="justify-items-center grid">
            {
                pokemonList ?
                pokemonList.map( (pokemonInTeam: PokemonInTeam) => {
                    return (
                        <div className="flex w-fit">
                            <PokemonSmallCard
                            key={pokemonInTeam.id}
                            pokemonInTeam={pokemonInTeam}
                            onClickGetPokemon={getSelectedPokemonOnClick}
                            isRemovePokemonAnimation={false}/>

                            <p key={`${pokemonInTeam.id}-message`}>
                                Message
                            </p>

                        </div>
                    )
                })
                :
                null
            }             
        </div>  

    </div>
  )
}
