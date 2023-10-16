import React from "react";
import { useSelector } from "react-redux";

function TodoItem(props) {
  let reduxData = useSelector((myStore) => {
    return myStore;
  });
  return (
    <div>
      <h3>TodoItem</h3>
      <p>{reduxData.todo}</p>
    </div>
  );
}

export default TodoItem;
