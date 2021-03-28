import React from 'react';
import './App.css';
import todosData from "./data/todosData";
import TodoItem from "./Components/TodoItem";

function App() {

  return (
      <div className="todo-list">
        {todosData.map(todoItem => <TodoItem key={todoItem.id} text={todoItem.text}
                                             completed={todoItem.completed}/>)}
      </div>
  );
}

export default App;
