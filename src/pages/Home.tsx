// import PokeGrid from "../components/PokeGrid";

import { MouseEvent, useState } from "react";
import PokemonFoundCard from "../components/PokemonFoundCard";
import { PokemonSmallCard } from "../components/PokemonSmallCard";
import { DropDownList } from "../components/shared/DropDownList";
import useFetchPokemonNames from "../hooks/useFetchPokemonNames";
import { Button } from "../components/shared/Button";

const Home = (): JSX.Element => {

  //states
  const [inputText, setInputText] = useState<string>('');
  // const [pokemonNameSearch, setPokemonNameSearch] = useState<string>('');
  const {pokemonNameList, indexList, isLoadingPokemonNames} = useFetchPokemonNames();

  const onInputChange = (newText: string) => {
    setInputText(newText);
  }

  const showSelectPokemonDiv = () => {

  }


  return (
    <>

      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-indigo-950 rounded-xl p-6 
            w-[600px] h-[350px] grid justify-items-start shadow-2xl ">

            <DropDownList
              dataList = {pokemonNameList} 
              isLoading = {isLoadingPokemonNames}
              value={inputText}
              onChange={onInputChange}
              extraStyle="bg-white mt-[50px] h-[200px] ml-[100px] w-[300px]"
              inputStyle="mb-[10px] ml-[100px]"
              listItemStyle="text-gray-500 hover:bg-gray-200"
            />
            <PokemonFoundCard
            pokemonName={
              pokemonNameList?.includes(inputText) || indexList.includes(inputText) ?
              (
                inputText 
              )
              :
              ''
            }
            extraStyle="h-[200px] "
            imgStyle="w-[200px] h-[200px] ml-3"/>

            <Button text={"Add"} 
            onClickFunc={() => {console.log('gola')}} 
            style={`border-2 border-transparent hover:border-white hover:border-2 
                    opacity-80 bg-rose-800 cursor-pointer rounded-2xl text-lg 
                    px-6 py-2 text-white mt-[10px] ml-[220px]`}
            />

        </div>

      </div>
      
        <div
          className="bg-transparent overflow-visible h-screen
          pb-28 grid-row justify-items-center mt-10 bg-ro"
        >

          <div className="grid justify-items-center mb-[80px]">
            <h1 className="text-5xl text-white mt-4">
                Welcome to PokeApp!
            </h1>

            <p className="text-2xl text-white mt-4">
                Here you find the best pokemon team to defeat your rival.
            </p>

          </div>

          <div className="flex justify-evenly gap-[200px] mb-[200px]">

          

            <div className="bg-indigo-950 w-[400px] h-[800px] 
            inline-block justify-items-center rounded-3xl opacity-90">
              <h1 className="text-white text-xl mt-[10px]">
                Select Rival's Team
              </h1>
              <PokemonSmallCard
              pokemonName="155"
              onClick={showSelectPokemonDiv}/>
              <PokemonSmallCard
              pokemonName="158"
              onClick={showSelectPokemonDiv}/>
              <PokemonSmallCard
              pokemonName="188"
              onClick={showSelectPokemonDiv}/>
              <PokemonSmallCard
              pokemonName="111"
              onClick={showSelectPokemonDiv}/>
              <PokemonSmallCard
              pokemonName="88"
              onClick={showSelectPokemonDiv}/>
              <PokemonSmallCard
              pokemonName="999"
              onClick={showSelectPokemonDiv}/>
              
              

            </div>

            <h1 className="text-white text-6xl justify-self-center self-center">
              VS
            </h1>

            <div className="bg-indigo-950 w-[400px] h-[800px] 
            inline-block justify-items-center rounded-2xl">
              <h1 className="text-white text-xl mt-[10px]">
                Best team to fight
              </h1>
                

            </div>

            

          </div>


          {/* <div className="h-[20px] w-[200px]">


          </div> */}

          <footer className="h-[1px] w-[1px]">
            Copyrigth
          </footer>

        </div>
    </>
  );
};

export default Home;
