import { Link } from "react-router-dom";

const Header = (): JSX.Element => {
  return (
    <>
    <header
      className="h-[90px] bg-transparent flex justify-between  
            items-center py-6 px-8 opacity-90"
    >
      <div className="bg-transparent">
        <h1
          className="font-medium text-4xl bg-transparent  
                        text-white ml-[40px]"
        >
          PokeApp
        </h1>
      </div>

      <ul
        className="flex items-center bg-transparent
                gap-4 font-medium text-lg 
                text-white ml-[40px]"
      >
        <Link to="/">
          <li
            className=" border-2 border-transparent hover:border-white hover:border-2 bg-transparent cursor-pointer rounded-xl
                    px-8 py-3 "
          >
            Home
          </li>
        </Link>
        <Link to="/newPost">
          <li
            className=" border-2 border-transparent hover:border-white hover:border-2 bg-transparent cursor-pointer rounded-xl
                    px-8 py-3 "
          >
            New Post
          </li>
        </Link>
        <Link to="/users">
          <li
            className=" border-2 border-transparent hover:border-white hover:border-2 bg-transparent cursor-pointer rounded-xl
                    px-8 py-3 "
          >
            Users
          </li>
        </Link>
        <Link to="/login">
          <li
            className=" border-2 border-transparent hover:border-white hover:border-2 bg-transparent cursor-pointer rounded-xl
                    px-8 py-3 "
          >
            Sign In
          </li>
        </Link>
      </ul>
    </header>
    <hr className="opacity-60"/>
    </>
  );
};

export default Header;
