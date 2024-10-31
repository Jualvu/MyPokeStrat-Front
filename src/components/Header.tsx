import { Link } from "react-router-dom";

const Header = (): JSX.Element => {
  return (
    <header
      className="h-[90px]
            bg-rose-900 flex justify-between  
            items-center py-6 px-8"
    >
      <div>
        <h1
          className="font-medium text-4xl 
                        text-white ml-[40px]"
        >
          PokeApp
        </h1>
      </div>

      <ul
        className="flex items-center
                gap-4 font-medium text-lg 
                text-white ml-[40px]"
      >
        <Link to="/newPost">
          <li
            className=" hover:bg-rose-500 bg-rose-950 cursor-pointer rounded-3xl
                    px-8 py-3 "
          >
            New Post
          </li>
        </Link>
        <Link to="/">
          <li
            className="hover:bg-rose-600 cursor-pointer rounded-md
                    px-8 py-3 "
          >
            Home
          </li>
        </Link>
        <Link to="/users">
          <li
            className="hover:bg-rose-600 cursor-pointer rounded-md
                    px-8 py-3 "
          >
            Users
          </li>
        </Link>
        <Link to="/login">
          <li
            className="hover:bg-rose-600 cursor-pointer rounded-md
                    px-8 py-3 "
          >
            Sign In
          </li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
