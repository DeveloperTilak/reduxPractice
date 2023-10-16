import { legacy_createStore as createStore } from "redux";
import todoReducer from "./todoReducer";



let myStore = createStore(todoReducer);


// whenever myStore gets updated subscribe function's callback function call 


myStore.subscribe(()=>{

   console.log( myStore.getState())
})
export default myStore