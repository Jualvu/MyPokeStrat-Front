import axios from "axios";

export const loginUser = async(username: string, password: string) => {
    try {
        const userJSON = {
            username,
            password
        }
       const response = await axios.post(`${import.meta.env.VITE_MYPOKESTRAT_API_URL}/api/v1/user/login`, userJSON);
       return { loggingSuccessful: response.data.logged }

    }catch(error){
        console.log(error);
        return { loggingSuccessful: false };
    }


}