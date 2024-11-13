import { useMemo, useState } from "react";
import PokemonFoundCard from "../components/PokemonFoundCard";
import { DropDownList } from "../components/shared/DropDownList";
import getPokemonNameList from "../helpers/getPokemonNameList";


const SearchPokemon = (): JSX.Element => {

  //Styles
  const mainDivStyle = `bg-transparent min-h-svh flex 
    items-start justify-center animate__animated animate__fadeIn`;
  const containerDivStyle = `bg-roseCustom opacity-95 rounded-2xl h-[780px] w-[1000px] 
      mb-20 mt-8`;
  const titleStyle = `text-white text-4xl mt-10  ml-[220px]`;

  //states
  const [inputText, setInputText] = useState<string>('');
  // const [pokemonNameSearch, setPokemonNameSearch] = useState<string>('');
  const {pokemonNameList, indexList, hasError} = useMemo(() => getPokemonNameList(), []);


  const onInputChange = (newText: string) => {
    setInputText(newText);
  }

  return (
    <div
      className={mainDivStyle}
    >
      <div
        className={containerDivStyle}
      >
        <h1 className={titleStyle}>
          Select wich pokemon you caugth!{" "}
        </h1>
        
        <DropDownList
        dataList = {pokemonNameList} 
        isLoading = {hasError}
        value={inputText}
        onChange={onInputChange}
        extraStyle="w-[500px] h-[300px] ml-[100px] mb-[20px] bg-indigo-950 border-2 border-gray-400"
        inputStyle={`bg-indigo-950 border-2 border-solid border-gray-400 border-inherit
           mt-[50px] ml-[100px] mb-[20px] mr-[50px] text-gray-200`}
        listItemStyle="hover:bg-slate-400 w-[486px] text-black"
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
          extraStyle="w-[800px] h-[200px]
          ml-[100px] mb-[20px]"
          imgStyle="w-[300px] h-[300px] ml-3"
          getPokemon={null}
          />


      </div>
    </div>
  );
};

export default SearchPokemon;
