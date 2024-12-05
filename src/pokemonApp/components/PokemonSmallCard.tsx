import { useRef } from "react";
import { PokemonInTeam } from "../context/types/pokemonContextTypes";

 
export const PokemonSmallCard = ({pokemonInTeam, onClickGetPokemon, isRemovePokemonAnimation} :
     {
        pokemonInTeam: PokemonInTeam, 
        onClickGetPokemon: (pokemonInTeam: PokemonInTeam) => void,
        isRemovePokemonAnimation: boolean

    }) => {
        const pokemonRef = useRef<HTMLInputElement>(null);
        // const [removeAnimation, setRemoveAnimation] = useState(`animate__animated animate__fadeIn`);

        const divCardStyle = `w-full h-32 bg-roseCustom 
            rounded-xl flex justify-center transform transition duration-500
            items-center opacity-90 mb-5  
            animate__animated animate__fadeIn 
            ${isRemovePokemonAnimation ? `hover:bg-gray-800 hover:scale-105 cursor-pointer`: ``} `

        const handleClick = () => {
            onClickGetPokemon(pokemonInTeam);
        }

  return (
    <>
        <div
            className={divCardStyle}
            onClick={handleClick}
            ref={pokemonRef}
        >
        <div>
            <p className="text-indigo-200 text-lg ml-3">
                {pokemonInTeam.pokemon.name}
            </p>  
            <p className="text-indigo-300 text-lg ml-3">
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
            className={'object-cover w-40 h-40 ml-10 mr-5'}/>
        </div>

        </div>

    </>
  )
}
