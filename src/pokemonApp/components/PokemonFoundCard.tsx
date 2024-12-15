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

    const pElementStyle = `text-lg`;

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
      <div className={`w-full inline-block items-center justify-between
              bg-indigo-950 opacity-90 rounded-lg ${extraStyle}`}
      >
            <div className="flex">

              {isLoadingPokemonData ? (
                null
              ) : (
                <>

                  <div className={`w-[80%] bg-blue-900 text-white items-center justify-items-evenly
                      ml-3 p-6 rounded-lg animate__animated animate__fadeIn relative`}>
                    <p className={pElementStyle}>id: {pokemonFound?.id} </p>
                    <p className={pElementStyle}>name: {pokemonFound?.name}</p>
                    <hr/>
                    <p className={pElementStyle}>types: {
                        pokemonFound?.types?.map( (type: string) => {
                          return (type + ' ')
                        })
                      } </p>
                  </div>

                  <div className="w-full mr-10">
                    {
                      pokemonFound?.id !== 0 ? 
                      (
                        <img 
                        src={pokemonFound?.img} 
                        className={`ml-20 mr-20 animate__animated animate__fadeIn ${imgStyle}`}/>
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
              <div className="mt-6">
                <Button text={"Add Pokemon"} 
                      onClickFunc={handleReturnPokemon} 
                      style={`border-2 border-transparent hover:border-white hover:border-2 
                              opacity-80 bg-roseCustom cursor-pointer rounded-2xl text-lg 
                              px-6 py-2 text-white ml-40 transform transition duration-500`}
                />
              </div>
              :
              null
            }

      </div>
      
    </>
  )
}

export default PokemonFoundCard