import React from 'react';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';

const App = () => {
  return (
    <div>
      <h2>TODO</h2>

      <TodoInput />
      <br/>
      <TodoList />
    </div>
  );
};

export default App;