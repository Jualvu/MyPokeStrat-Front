import useFetch from "../hooks/useFetch";
import { DataPokemon } from "../types/PokemonInfoType";

type Props = {
    pokemonName: string;
}

const PokemonFoundCard = ({pokemonName}: Props) => {

    const containerDivStyle = `p-4 flex items-center justify-start 
          bg-indigo-950 opacity-90 w-[800px] h-[300px]
          ml-[100px] mb-[20px] rounded-lg`;
    const pokemonDataDivStyle = `bg-blue-900 text-white ml-10 p-6 rounded-lg w-[300px]`;
    const pElementStyle = `text-xl`;
    const divImageContainerStyle = `ml-[100px] bg`;

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
                <p className={pElementStyle}>id: {data?.id}</p>
                <p className={pElementStyle}>types: </p>
                <p className={pElementStyle}>name: {data?.name}</p>

                  { 
                    data?.types?.map( ({type}, index) => {
                        console.log("VENGO DE POKEMONFOUND" + data?.name)
                      return (
                        <p 
                        className={pElementStyle}
                        key={index}>
                            {type.name}
                        </p>
                      )
                    })
                  }
              </div>
              <div className={divImageContainerStyle}>
                <img 
                src={data?.sprites?.front_default || 
                  'https://pokerating.com/static/images/PokemonArt/unown-question.png'} 
                className={data?.sprites?.front_default 
                  ? 'w-[300px] h-[300px] ml-3'
                  : 'w-[100px] h-[180px] ml-3'}/>
              </div>
            </>
          )}
          
        </div>
  )
}

export default PokemonFoundCard