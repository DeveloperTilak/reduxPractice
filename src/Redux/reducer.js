import { GET_TODO_SUCCESS, POST_TODO_SUCCESS, TODO_FAILURE, TODO_REQUEST } from "./actionTypes";


const initState = {

    todos:[],
    isLoading: false,
    isError: false,
}
export const reducer = (state =initState, action)=>{

    const {type, payload} = action;

    switch (type) {
        case TODO_REQUEST:
            return{
                ...state, isLoading:true
            }
        case TODO_FAILURE:
            return{
                ...state, isError:true
            }
        case GET_TODO_SUCCESS:
            return{
                ...state, isError:false, 
                isLoading:false,
                todos:payload
            }
        case POST_TODO_SUCCESS:
            return{
                ...state, isError:false, 
                isLoading:false,
                todos:[...state.todos,  payload]
            }
        default:
            return state;
    }

}