import axios from "axios"
import { useEffect, useState } from "react";

export type StateType<T> = {
    data: null | T;
    isLoading: boolean;
    hasError: boolean;
    error: null | Error;
}

const useFetch = <T,>(url: string): StateType<T> => {


    const [state, setState] = useState<StateType<null>>({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    })

    useEffect(() => {
        const getFetch = async() => {

            resetState();
            let result;
    
            await axios
            .get(url)
            .then( ({data}) => {
                result = data;
                setState( {
                    data: result,
                    isLoading: false,
                    hasError: false,
                    error: null
                });
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
    
        }

        getFetch();
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