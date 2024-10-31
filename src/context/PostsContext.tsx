import { createContext, useState, useEffect } from "react";
import pokeData from "../data/pokeData";
import PokeUser from "../types/PokeUserType";

//context posts type
export type PostsContextType = {
    postsData: PokeUser[];
    isLoading: boolean;
    // saveTodo: (todo: ITodo) => void;
    // updateTodo: (id: number) => void;
};
//create context
const PostsContext = createContext<PostsContextType | null >(null);

//children type
type ContextProviderProps = {
    children: React.ReactNode;
  };

export const PostsProvider = ({children}: ContextProviderProps) => {

    const [postsData, setPostsData] = useState<PokeUser[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect( () => {
        fetchPostsData();
    }, []);

    const fetchPostsData = (): void => {
        setIsLoading(false);
        setPostsData(pokeData);
    }

    return( 
        <PostsContext.Provider
            value={{
                postsData,
                isLoading
            }}
        >
            {children}
        </PostsContext.Provider>
    );
};


export default PostsContext;


