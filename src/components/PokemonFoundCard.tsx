import useFetch from "../hooks/useFetch";
import { DataPokemon } from "../types/PokemonInfoType";

type Props = {
    pokemonName: string;
    extraStyle: string;
    imgStyle: string;
}

const PokemonFoundCard = ({pokemonName, extraStyle, imgStyle}: Props) => {

    const containerDivStyle = `flex items-center justify-items-evenly  justify-around
          bg-indigo-950 opacity-90 w-full rounded-lg ${extraStyle}`;
    const pokemonDataDivStyle = `bg-blue-900 text-white items-center justify-items-evenly
     ml-10 p-6 rounded-lg w-[250px]`;
    const pElementStyle = `text-xl`;
    const divImageContainerStyle = ``;

    const {data, isLoading} = useFetch<DataPokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);



  return (
    <div
          className={containerDivStyle}
        >
          {isLoading ? (
            null
          ) : (
            <>

              <div className={pokemonDataDivStyle}>
                <p className={pElementStyle}>id: {data?.id} </p>
                <p className={pElementStyle}>name: {data?.name}</p>
                <hr/>
                <p className={pElementStyle}>types: {
                    data?.types?.map( ({type}) => {
                      return (type.name + ' ')
                    })
                  } </p>
              </div>
              <div className={divImageContainerStyle}>
                <img 
                src={data?.sprites?.front_default || 
                  'https://pokerating.com/static/images/PokemonArt/unown-question.png'} 
                className={data?.sprites?.front_default 
                  ? `${imgStyle}`
                  : 'w-[100px] h-[180px] ml-3'}/>
              </div>
            </>
          )}
          
        </div>
  )
}

export default PokemonFoundCard