import React from "react";
import Todo from "./Components/Todo";
import TodoItem from "./Components/TodoItem";
import Counter from "./Components/Counter";

const App = () => {
  return (
    <div>
       <Todo />
       <TodoItem />

       <Counter />
    </div>
  );
};

export default App;
