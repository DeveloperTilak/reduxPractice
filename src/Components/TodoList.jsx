import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, getTodoSuccess, getTodos, todoFailureActon, todoRequestAction, updateTodo } from "../Redux/action";

function TodoList(props) {
  let dispatch = useDispatch();

  let todos = useSelector((store)=>store.todos)

//   console.log(todos)
  
  useEffect(() => {
    // getTodos(dispatch);
    dispatch(getTodos)
  }, []);

  const handleDelete  = (id)=>{
    dispatch(deleteTodo(id))
  }
  const handleUpdate = (id) => {
    // Find the todo item by id
    const todo = todos.find((element) => element.id === id);
  
    // Toggle the status
    const updatedTodo = { ...todo, status: !todo.status };
  
    // Dispatch the updateTodo action
    dispatch(updateTodo(updatedTodo));
  };
  
  return <div>


  {
    todos.map((element, index)=>{
        return(
            <div key={index}>
            <p>{element.id} --- {element.title} --- {element.status ? "completed" : "not complete" }</p>

            <button onClick={()=>{handleUpdate(element.id)}}>status</button>
            <button>update</button>
            <button onClick={()=>{handleDelete(element.id)}}>delete</button>
            </div>
        )
    })
  }

  </div>;
}

export default TodoList;
