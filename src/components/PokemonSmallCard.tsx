import useFetch from "../hooks/useFetch";
import { DataPokemon } from "../types/PokemonInfoType";


type Props = {
    pokemonName: string;
    onClick: () => void;
}

export const PokemonSmallCard = ({pokemonName, onClick}: Props) => {

    const {data, isLoading} = useFetch<DataPokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    const handleClick = () => {
        onClick();
    }

  return (
    <>
        <div
            className="mt-[10px] w-[300px] h-[100px] bg-roseCustom 
            rounded-lg cursor-pointer flex justify-center
            items-center opacity-90 mb-[20px] hover:scale-110"
            onClick={handleClick}
        >
            {
                isLoading ?
                
                <h1>Loading...</h1>
                :
                (
                    <>
                        <div>
                            <p className="text-white text-lg ml-[10px]">
                                {data?.name}
                            </p>  
                            <p className="text-white text-lg ml-[10px]">
                                types: {
                                        data?.types?.map( ({type}) => {
                                            return type.name + ' '
                                        })
                                        } 
                            </p>  
                        </div>

                        <div>
                        <img 
                            src={data?.sprites?.front_default || 
                                'https://pokerating.com/static/images/PokemonArt/unown-question.png'} 
                            className={data?.sprites?.front_default 
                                ? 'w-[150px] h-[150px] ml-10 mr-[20px]'
                                : 'w-[100px] h-[180px] ml-10 mr-[10px]'}/>
                        </div>
                        
                        
                    </>
                )  
            }

        </div>

    </>
  )
}
