import { authReducerAction, authState } from "../types/authContextTypes";



export const authReducer = (initialState: authState = {logged: false, user: {name:""}}, action: authReducerAction) => {

    switch( action.type ){

        case '[AUTH] Log in user':
            return {
                logged: true,
                user: action.payload.user
            };

        case '[AUTH] Log out user':
            return {
                logged: false,
                user: {
                    name: ''
                }
            };;

        default:
            return initialState;
            
        
    }

  
}
