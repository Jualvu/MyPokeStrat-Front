import { PokemonInTeam } from "../context/types/pokemonContextTypes"
import { PokemonSmallCard } from "./PokemonSmallCard"

export const PokemonAITeamList = ({pokemonList = [], getSelectedPokemonOnClick, titleText}: 
    {
        pokemonList: PokemonInTeam[],
        getSelectedPokemonOnClick: (pokemonInTeam: PokemonInTeam) => void,
        titleText: string,
    }) => {


  return (
    <div className="bg-indigo-950 w-full h-fit min-h-96
        grid rounded-3xl opacity-90 animate__animated animate__fadeInLeft">

        <div className="flex justify-center gap-8 mt-5 ml-10 mr-10 mb-4 opacity-90">
            <h1 className="text-white text-xl">
                {titleText}
            </h1>
        </div>

        <div className="justify-items-center inline-block">
            {
                pokemonList ?
                pokemonList.map( (pokemonInTeam: PokemonInTeam) => {
                    return (
                        <div className="flex w-full pl-4 pr-4" key={`${pokemonInTeam.id}-div`}>
                            <PokemonSmallCard
                            key={pokemonInTeam.id}
                            pokemonInTeam={pokemonInTeam}
                            onClickGetPokemon={getSelectedPokemonOnClick}
                            isRemovePokemonAnimation={false}/>

                            <span className="inline-block m-4 ml-10 bg-slate-600 rounded-xl">
                                <p className="text-gray-400 text-sm ">
                                    Message personalziado Message personaage personalziado 
                                    Message personalziado Message personaage personalziado 
                                    Message personalziado Message personaage personalziado 
                                    Message personalziado Message personaage personalziado 
                                    s
                                </p> 
                            </span>
                            

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
