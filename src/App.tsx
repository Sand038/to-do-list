import React, {FC, useState} from 'react';
import './App.css';
import todosData from "./data/todosData";
import TodoItem from "./Components/TodoItem";

const App: FC = () => {

  const [toDoItems, setToDoItems] = useState(todosData);

  const handleChange = (id: number) => {
    setToDoItems(toDoItems.map(i => {
      if (i.id === id) {
        i.completed = !i.completed;
      }
      return i;
    }));
  }

  return (
      <div className="todo-list">
        {toDoItems.map(todoItem =>
            <TodoItem
                key={todoItem.id}
                id={todoItem.id}
                text={todoItem.text}
                completed={todoItem.completed}
                handleChange={handleChange}
            />)
        }
      </div>
  );
}

export default App;
