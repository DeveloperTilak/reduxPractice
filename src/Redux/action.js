import axios from "axios";
import {
  GET_TODO_SUCCESS,
  POST_TODO_SUCCESS,
  TODO_FAILURE,
  TODO_REQUEST,
} from "./actionTypes";

export const todoRequestAction = () => {
  return { type: TODO_REQUEST };
};

export const todoFailureActon = () => {
  return { type: TODO_FAILURE };
};
export const getTodoSuccess = (payload) => {
  return { type: GET_TODO_SUCCESS, payload };
};
export const postTodoSuccess = (payload) => {
  return { type: POST_TODO_SUCCESS, payload };
};


export const getTodos = (dispatch) => {
  dispatch(todoRequestAction());
  axios.get("http://localhost:8080/todos").then((res) => {
    dispatch(getTodoSuccess(res.data));
  //   console.log(res.data)

  })
  .catch((err)=>{
      dispatch(todoFailureActon())
  })
};


export const postTodo = (newTodo)=> (dispatch)=>{
  // console.log(newTodo)
  dispatch(todoRequestAction())
  axios.post(`http://localhost:8080/todos`, newTodo).then((res)=>{
    console.log("Post success", res.data);
    dispatch(postTodoSuccess(res.data))
  })
  .catch((err)=>{
    console.log(err)
  })

}


export const deleteTodo = (id)=>(dispatch)=>{
  // dispatch(todoRequestAction())
  axios.delete(`http://localhost:8080/todos/${id}`).then((res)=>{
    console.log("delete action", res.data)
   dispatch(getTodos)

  }).catch((err)=>{
    console.log(err);
  })
}
export const updateTodo = (updatedTodo) => (dispatch) => {
  // dispatch(todoRequestAction())
  axios
    .put(`http://localhost:8080/todos/${updatedTodo.id}`, updatedTodo)
    .then((res) => {
      console.log("Update action", res.data);
      dispatch(getTodos );
    })
    .catch((err) => {
      console.log(err);
    });
};
