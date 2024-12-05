import { NavLink } from "react-router-dom";

const Header = (): JSX.Element => {
  return (
    <>
    <header
      className="h-24 bg-transparent flex justify-between  
            items-center py-6 px-8 opacity-90"
    >
      <div className="bg-transparent">
        <h1
          className="font-medium text-4xl bg-transparent  
                        text-white ml-10"
        >
          MyPokeStrat
        </h1>
      </div>

      <ul
        className="flex items-center bg-transparent
                gap-4 font-medium text-lg 
               ml-10"
      >
        <NavLink 
          to="/"
          className={ ({isActive}) => {
            return `border-2 border-transparent hover:border-gray-400 
            hover:border-2 bg-transparent cursor-pointer rounded-xl transform transition duration-500
            px-8 py-3 ${isActive ? 'text-white' : 'text-gray-400'}`}
            }
          >
            Home
        </NavLink>

        <NavLink 
          to="/myPokemon"
          className={ ({isActive}) => {
            return `border-2 border-transparent hover:border-white 
            hover:border-2 bg-transparent cursor-pointer rounded-xl transform transition duration-500
            px-8 py-3 ${isActive ? 'text-white' : 'text-gray-400'}`}
            }
          >
            My Pokemon 
        </NavLink>
        
      </ul>
    </header>
    <hr className="opacity-60"/>
    </>
  );
};

export default Header;
