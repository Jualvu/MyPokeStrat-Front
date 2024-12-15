import { PokemonAndMessage, PokemonInTeam, PokemonTeamAndMessageList } from "../context/types/pokemonContextTypes"
import { PokemonSmallCard } from "./PokemonSmallCard"

export const PokemonAITeamList = ({pokemonAndMessagesList = {pokemonAITeam:[]}, getSelectedPokemonOnClick, titleText}: 
    {
        pokemonAndMessagesList: PokemonTeamAndMessageList,
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
                pokemonAndMessagesList ?
                pokemonAndMessagesList.pokemonAITeam.map( ( pokemonAndMessage: PokemonAndMessage) => {
                    return (
                        <div className="flex justify-between w-full pl-4 pr-4" 
                            key={`${pokemonAndMessage.pokemon.id}-div`}>
                            <div className="w-full">
                                <PokemonSmallCard
                                pokemonInTeam={pokemonAndMessage.pokemon}
                                onClickGetPokemon={getSelectedPokemonOnClick}
                                isRemovePokemonAnimation={false}/>
                            </div>
                            

                            <div className="mb-4 ml-10 bg-indigo-900 rounded-xl opacity-80 w-[70%]">
                                <p className="text-gray-100 text p-4">
                                    {pokemonAndMessage.message}
                                </p> 
                            </div>
                            

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
