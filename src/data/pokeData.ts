import PokeUser from "../types/PokeUserType";

const pokeData: PokeUser[] = [
  {
    user: {
      name: "julio",
      age: "21",
    },
    pokemon: {
      id: 1,
      name: "gengar",
      img: "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/f/f8/latest/20200428203046/Gengar.png/200px-Gengar.png",
      types: ["Ghost"],
    },
  },
  {
    user: {
      name: "andres",
      age: "21",
    },
    pokemon: {
      id: 2,
      name: "lucario",
      img: "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/d/d0/latest/20150621180604/Lucario.png/200px-Lucario.png",
      types: ["Fight", "Steel"],
    },
  },
  {
    user: {
      name: "pri",
      age: "21",
    },
    pokemon: {
      id: 3,
      name: "luxray",
      img: "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/e/ee/latest/20200720153035/Luxray.png/200px-Luxray.png",
      types: ["Electric"], 
    },
  },
];

export default pokeData;
