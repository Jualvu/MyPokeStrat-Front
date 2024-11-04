import axios from "axios"
import { useEffect, useState } from "react";

export type StateType<T> = {
    data:  T | null;
    isLoading: boolean;
    hasError: boolean;
    error: null | Error;
}
type CacheDataType<T> = {
    [key: string] : T;
}

const localDataCache: CacheDataType<null> ={};


const useFetch = <T,>(url: string): StateType<T> => {


    const [state, setState] = useState<StateType<null>>({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    })

    useEffect(() => {

        //si el data ya existe en el Cache, no se hace Fetch y se utiliza el Cache
        if( localDataCache[url] != null){
            setState( {
                data: localDataCache[url],
                isLoading: false,
                hasError: false,
                error: null
            });
            return;
        }

        resetState();
        let result;

        axios
        .get(url)
        .then( ({data}) => {
            result = data;
            setState( {
                data: result,
                isLoading: false,
                hasError: false,
                error: null
            });
            //Guardar la data en el cache
            localDataCache[url] = data;
            return;
        })
        .catch((error) => {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: error
            });
            return;
        })
    
        
    },[url]);


    const resetState = () => {
        setState(
            {
                data: null,
                isLoading: true,
                hasError: false,
                error: null
            }
        )
    }

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
    error: state.error
  }
}

export default useFetch