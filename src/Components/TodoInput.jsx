import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  postTodo,
  postTodoSuccess,
  todoFailureActon,
  todoRequestAction,
} from "../Redux/action";

function TodoInput(props) {
  let [title, setTitle] = useState("");
  const [updatedTask, setUpdatedTask] = useState("");

  let dispatch = useDispatch();

  const handleAddTodo = () => {
    const newTodo = {
      title,
      status: false,
    };

    dispatch(postTodo(newTodo))
    setTitle("")
     
  };


  
  return (
    <div>
      <input
        type="text"
        placeholder="Add Todo"
        value={updatedTask}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
}

export default TodoInput;
