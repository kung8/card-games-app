import { handleCards } from "./cardsReducer";

const initialState = {
    user:{}
}

const SAVE_USER = 'SAVE_USER'

export default function (state=initialState,action){
    const {type,payload} = action
    switch(type){
        case SAVE_USER:
            return {...state, user:payload}
        default:
            return {...state}
    }
}

export function saveUser(user){
    return{
        payload:user,
        type:SAVE_USER
    }
} 