import useFetchPokemonData from "../hooks/useFetchPokemonData";
import Pokemon from "../types/PokemonType";
import { Button } from "./shared/Button";

type Props = {
    pokemonName: string;
    extraStyle: string;
    imgStyle: string;
    getPokemon:  null | ( (poke: Pokemon) => void );
}
 
const PokemonFoundCard = ({pokemonName, extraStyle, imgStyle, getPokemon = null}: Props) => {

    const containerDivStyle = `flex items-center justify-items-evenly  justify-around
          bg-indigo-950 opacity-90 rounded-lg ${extraStyle}`;
    const pokemonDataDivStyle = `bg-blue-900 text-white items-center justify-items-evenly
     ml-10 p-6 rounded-lg w-[250px]`;
    const pElementStyle = `text-xl`;
    const divImageContainerStyle = ``;

    const { pokemonFound, isLoadingPokemonData} = useFetchPokemonData(pokemonName);

    const handleReturnPokemon = () => {
      if(getPokemon){
        getPokemon(pokemonFound || {
          id: 0,
          name: 'null',
          img: 'null',
          types: ['null']
          })
      }
    }

  return (
    <>
      <div
            className={containerDivStyle}
          >
            {isLoadingPokemonData ? (
              null
            ) : (
              <>

                <div className={pokemonDataDivStyle}>
                  <p className={pElementStyle}>id: {pokemonFound?.id} </p>
                  <p className={pElementStyle}>name: {pokemonFound?.name}</p>
                  <hr/>
                  <p className={pElementStyle}>types: {
                      pokemonFound?.types?.map( (type) => {
                        return (type + ' ')
                      })
                    } </p>
                </div>
                <div className={divImageContainerStyle}>
                  {
                    pokemonFound?.id !== 0 ? 
                    (
                      <img 
                      src={pokemonFound?.img} 
                      className={imgStyle}/>
                    )
                    :
                    null
                  }

                </div>
              </>
            )}
            
      </div>

      {
        getPokemon ?
        <div>
          <Button text={"Add"} 
                onClickFunc={handleReturnPokemon} 
                style={`border-2 border-transparent hover:border-white hover:border-2 
                        opacity-80 bg-rose-800 cursor-pointer rounded-2xl text-lg 
                        px-6 py-2 text-white  ml-[220px]`}
          />
        </div>
        :
        null
      }
    </>
  )
}

export default PokemonFoundCard