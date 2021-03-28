import React from 'react';
import './App.css';
import {TodoItem} from "./Components/TodoItem";

function App() {
  return (
      <div className="todo-list">
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </div>
  );
}

export default App;