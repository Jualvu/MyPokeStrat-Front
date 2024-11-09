import Pokemon from "../types/PokemonType"

 
export const PokemonSmallCard = ({pokemon, getPokemon} :
     {
        pokemon: Pokemon, 
        getPokemon: (pokemon: Pokemon) => void
    }) => {
 
    const handleClick = () => {
        if (getPokemon) getPokemon(pokemon);
    }

  return (
    <>
        <div
            className="mt-[10px] w-[300px] h-[100px] bg-roseCustom 
            rounded-lg cursor-pointer flex justify-center
            items-center opacity-90 mb-[20px] hover:scale-110"
            onClick={handleClick}
        >
        <div>
            <p className="text-indigo-200 text-lg ml-[10px]">
                {pokemon.name}
            </p>  
            <p className="text-indigo-300 text-lg ml-[10px]">
                types: {
                        pokemon.types.map( (type: string) => {
                            return type + ' '
                        })
                        } 
            </p>  
        </div>

        <div>
        <img 
            src={pokemon.img || ''} 
            className={'w-[150px] h-[150px] ml-10 mr-[20px]'}/>
        </div>

        </div>

    </>
  )
}
