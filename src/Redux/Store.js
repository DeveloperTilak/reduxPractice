import { applyMiddleware, legacy_createStore } from "redux";
import { reducer } from "./reducer";
import thunk from "redux-thunk";

// const myMiddleWare = (store)=>(dispatch)=>(action)=>{
//     //a:- store-> getState(), dispatch()
//     //b:- dispatch
//     //c:- action obj-> type,payload
//     // console.log(b)

//     if(typeof action === "function"){
//         return action(dispatch)
//     }
//     return dispatch(action)
// }

export const store = legacy_createStore(reducer, applyMiddleware(thunk))