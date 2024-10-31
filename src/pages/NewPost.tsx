import { useEffect, useState } from "react";
import { Button } from "../components/shared/Button";
import useFetchPokemonNames from "../hooks/useFetchPokemonNames";
import PokemonFoundCard from "../components/PokemonFoundCard";
import { DropDownList } from "../components/shared/DropDownList";
import { TextArea } from "../components/shared/TextArea";


const NewPost = (): JSX.Element => {

  //Styles
  const mainDivStyle = `bg-indigo-950 min-h-svh flex 
    items-start justify-center overflow-hidden`;
  const containerDivStyle = `bg-roseCustom opacity-95 rounded-2xl h-[780px] w-[1000px] 
      mb-20 mt-8`;
  const titleStyle = `text-white text-4xl mt-10  ml-[220px]`;


  //states
  // const [isSearching, setIsSearching] = useState<boolean>(false);
  const [pokemonNameSearch, setPokemonNameSearch] = useState<string>('');
  const {pokeNamesList, isLoadingPokeNames} = useFetchPokemonNames();

  const handleInputText = (text: string) => {
    console.log('Pokemon para buscar: ' + pokemonNameSearch)

    setPokemonNameSearch(text);
  }
  useEffect(() => {

    // console.log('Pokemon para buscar: ' + pokemonNameSearch)
  },[pokemonNameSearch])


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
        dataList = {pokeNamesList} 
        isLoading = {isLoadingPokeNames}
        returnInputText = {(text) => handleInputText(text)}
        />

        <PokemonFoundCard
          pokemonName={pokemonNameSearch}
          />

        <label className="text-white text-2xl ml-[180px] mb-[20px] mr-[200px]">
          Description
        </label>

        <TextArea
          placeHolder='Description...'
          extraStyle= 'mt-[10px] ml-[180px] mb-[10px] mr-[200px]'
          />

        <Button
          text="Submit"
          onClickFunc={() => {
            console.log('Submited!')
          }}
          extraStyle="ml-[420px]"
          >
            
        </Button>

      </div>
    </div>
  );
};

export default NewPost;
