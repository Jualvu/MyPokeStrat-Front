import { PokemonInTeam } from "../context/types/pokemonContextTypes";

 
export const PokemonSmallCard = ({pokemonInTeam, onClickGetPokemon, isRemovePokemonAnimation} :
     {
        pokemonInTeam: PokemonInTeam, 
        onClickGetPokemon: (pokemonInTeam: PokemonInTeam) => void,
        isRemovePokemonAnimation: boolean
    }) => {
 
    const handleClick = () => {
        onClickGetPokemon(pokemonInTeam);
    }

  return (
    <>
        <div
            className={`mt-[10px] w-5/6 h-32 bg-roseCustom 
            rounded-xl flex justify-center transform transition duration-500
            items-center opacity-90 mb-[20px]  
            animate__animated animate__fadeIn
            ${isRemovePokemonAnimation ? 
                `hover:bg-gray-800 hover:scale-105 cursor-pointer hover:{animate__animated animate__shakeX}` 
                : null}`}
            onClick={handleClick}
        >
        <div>
            <p className="text-indigo-200 text-lg ml-[10px]">
                {pokemonInTeam.pokemon.name}
            </p>  
            <p className="text-indigo-300 text-lg ml-[10px]">
                types: {
                        pokemonInTeam.pokemon.types.map( (type: string) => {
                            return type + ' '
                        })
                        } 
            </p>  
        </div>

        <div>
        <img 
            src={pokemonInTeam.pokemon.img || ''} 
            className={'object-cover w-40 h-40 ml-10 mr-[20px]'}/>
        </div>

        </div>

    </>
  )
}
