import React, { useState } from "react";
import myStore from "../Redux/Store";
import { todoActionCreator } from "../Redux/actionCreater";
import { useDispatch } from "react-redux";

function Todo(props) {
  let [state, setState] = useState("");
  let dispatch = useDispatch();

  const handleData = () => {
    // myStore.dispatch({ type: "TODO", payload: state });

    dispatch(todoActionCreator(state));
  };
  return (
    <div>
      <h2>To Do</h2>
      <input
        type="text"
        placeholder="Enter Task"  
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
      <button onClick={handleData}>Submit</button>
    </div>
  );
}

export default Todo;
