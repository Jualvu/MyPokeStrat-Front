import PokeUser from "../types/PokeUserType"

const PokeItem = ({ user, pokemon }: PokeUser): JSX.Element => {
    return (
        <>
            <div className='bg-indigo-950 opacity-70 w-[800px] h-[50px] 
                        rounded-t-2xl flex items-start justify-normal'>
                <p className='text-gray-100 text-2xl m-4'>
                    {"Autor: " + user.name}
                </p>
            </div>
            <p className='text-black text-xl ml-4 mt-2'>
                {"Edad: " + user.age}
            </p>
            <p className='text-black text-xl ml-4 mb-4'>
                {"Pokemon atrapado: " + pokemon.name}
            </p>
            
            <p
            className='text-black text-xl ml-4 mb-4'>
                Tipos:
                {
                pokemon.types.map( type => {
                        return type + " "
                    })
                }
            </p>
            
            <img src={pokemon.img} alt={pokemon.name}
                className='size-auto block m-auto mb-2' />
        </>
    )
}

export default PokeItem