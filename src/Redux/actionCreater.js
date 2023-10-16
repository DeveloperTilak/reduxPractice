import { TODO, INC, DESC } from "./actionTypes"


export const todoActionCreator = (data)=>{
    return {
        type: TODO, payload: data
    }
}
export const INCCreator= (data)=>{
    return {
        type: INC, payload: data
    }
}
export const DESCCreator = (data)=>{
    return {
        type: DESC, payload: data
    }
}

//similarly we can create multiple action creator