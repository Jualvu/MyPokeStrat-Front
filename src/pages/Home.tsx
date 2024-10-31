import PokeGrid from "../components/PokeGrid";

const Home = (): JSX.Element => {

  return (
      <div
        className="bg-indigo-950 overflow-visible 
          scrollbar-thumb-rounded-full scrollbar-track-rounded-full 
          scrollbar-thin scrollbar-thumb-indigo-900 
        scrollbar-track-indigo-950 overflow-y-scroll h-screen
          pb-28"
      >
        <PokeGrid />
      </div>
  );
};

export default Home;
