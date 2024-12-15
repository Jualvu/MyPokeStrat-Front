import { PokemonInTeam } from "../context/types/pokemonContextTypes"
import { PokemonSmallCard } from "./PokemonSmallCard"

export const PokemonTeamList = ({pokemonList = [], getSelectedPokemonOnClick, titleText, pokemonLeftCount, isRemovePokemonAnimation}: 
    {
        pokemonList: PokemonInTeam[],
        getSelectedPokemonOnClick: (pokemonInTeam: PokemonInTeam) => void,
        titleText: string,
        pokemonLeftCount: boolean,
        isRemovePokemonAnimation: boolean
    }) => {


  return (
    <div className="bg-indigo-950 w-fit h-fit min-h-96
        inline-block rounded-3xl opacity-90 animate__animated animate__fadeInLeft">

        <div className="flex justify-center gap-8 mt-5 ml-10 mr-10  mb-4 opacity-90">
            <h1 className="text-white text-xl">
                {titleText}
            </h1>

            {
                pokemonLeftCount ?
                
                    (
                        pokemonList.length !== 6 ?
                        <h1 className="text-red-900 text-xl font-bold">
                        {`Please add ${6 - pokemonList.length} Pokemon`}
                        </h1>
                        :
                        <h1 className="text-green-600 text-xl font-bold">
                        {`Ready to generate Team!`}
                        </h1>
                    )
            
                :
                null
            }
        </div>
 
        <div className="justify-items-center grid">
            {
                pokemonList ?
                pokemonList.map( (pokemonInTeam: PokemonInTeam) => {
                    return (

                        <div className="pl-4 pr-4 w-full"
                        key={pokemonInTeam.id}>
                            <PokemonSmallCard
                            pokemonInTeam={pokemonInTeam}
                            onClickGetPokemon={getSelectedPokemonOnClick}
                            isRemovePokemonAnimation={isRemovePokemonAnimation}/>
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
