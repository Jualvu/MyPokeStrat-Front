import { useContext, useState } from "react";
import { InputText } from "../../pokemonApp/components/shared/InputText"
import { Button } from "../../pokemonApp/components/shared/Button";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { user } from "../types/authContextTypes";
import { loginUser } from "../../pokemonApp/services/users/loginUser";

export const LoginPage = () => {

  const { logUser} = useContext(AuthContext) || {
    logUser: () => {}
  };

  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>('')

  const onNameChange = (value: string) => {
    setName(value);
  }
  const onPasswordChange = (value: string) => {
    setPassword(value);
  }

  const login = async () => {

    const nameInput = name.trim();
    const passInput = password.trim();

    
    const user: user = {
      name: name
    }

    try{
      const { loggingSuccessful } = await loginUser(nameInput, passInput);

      if(loggingSuccessful){
        logUser(user);

      }else if( nameInput === "" || passInput === "" ){
        setErrorMessage('Please enter a valid username and password.');

      }else if(!loggingSuccessful){
        setErrorMessage('Invalid credentials.');
      }
      else{
        setErrorMessage('');
      }
  
    }catch(error){
      console.log(error);
    }
   
  }

  return (

    <>

      <div className="w-screen h-screen flex bg-transparent items-center place-content-center">

        <div className="grid w-fit h-fit px-36 py-6 bg-indigo-950 border-2 border-gray-500 rounded-lg opacity-85 items-center place-content-center justify-items-center">

            
            <h1 className="text-3xl text-gray-300">Log in to MyPokeStrat</h1>

            <img src="/assets/gengar.gif" alt="gengar" className="h-44 " />

            <div className="grid">
                <p className="text-xl text-gray-300 mb-1">Username</p>
                <InputText
                    extraStyle="bg-indigo-950 border-2 border-indigo-900 text-gray-300 mb-4"
                    onChange={onNameChange}
                    placeHolder=""
                    value={name}
                    onFocus={() => {}}
                />
                <p className="text-xl text-gray-300 mb-1">Password</p>
                <InputText
                    extraStyle="bg-indigo-950 border-2 border-indigo-900 text-gray-300"
                    onChange={onPasswordChange}
                    placeHolder=""
                    value={password}
                    onFocus={() => {}}
                />

                <Link to={'/auth/register'}>
                  <u className="text-blue-400 font-semibold self-start mt-10">Register</u>
                </Link>
            </div>
            
            <p  className="text-red-500 text-lg">
                {
                  errorMessage
                }
            </p>

            <Button
              onClickFunc={login}
              style="bg-roseCustom w-fit h-fit px-4 py-2 rounded-xl mt-6 mb-8 text-gray-300 "
              text="Login"
            />
            <Link to={'/'}>
              <u className="text-blue-400 font-semibold self-start mt-10">Go back</u>
            </Link>

        </div>
      </div>

    </>  
  )
}

