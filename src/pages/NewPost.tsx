import { useState } from "react";
import { Button } from "../components/shared/Button";
import PokemonFoundCard from "../components/PokemonFoundCard";
import { DropDownList } from "../components/shared/DropDownList";
import { TextArea } from "../components/shared/TextArea";
import useFetchPokemonNames from "../hooks/useFetchPokemonNames";


const NewPost = (): JSX.Element => {

  //Styles
  const mainDivStyle = `bg-transparent min-h-svh flex 
    items-start justify-center`;
  const containerDivStyle = `bg-roseCustom opacity-95 rounded-2xl h-[780px] w-[1000px] 
      mb-20 mt-8`;
  const titleStyle = `text-white text-4xl mt-10  ml-[220px]`;

  //states
  const [inputText, setInputText] = useState<string>('');
  // const [pokemonNameSearch, setPokemonNameSearch] = useState<string>('');
  const {pokemonNameList, indexList, isLoadingPokemonNames} = useFetchPokemonNames();

  // console.log(pokemonNameList)

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
        isLoading = {isLoadingPokemonNames}
        value={inputText}
        onChange={onInputChange}
        extraStyle="bg-white w-[511px] 
            h-[200px] ml-[100px] mb-[20px]"
        inputStyle="mt-[50px] ml-[100px] mb-[20px] mr-[50px]"
        listItemStyle="hover:bg-slate-400 w-[500px] text-black"
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
          style="ml-[420px]"
          >
            
        </Button>

      </div>
    </div>
  );
};

export default NewPost;
