
export type authReducerAction = {
    type: string,
    payload: authState
}

export type authState = {
    logged: boolean,
    user: user
}

export type user = {
    name: string
}