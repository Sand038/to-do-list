import React, {FC} from "react";

interface ToDoItemProps {
  id: number;
  text: string;
  completed: boolean;
  handleChange: (id: number) => void;
}

const TodoItem: FC<ToDoItemProps> = ({id, text, completed, handleChange}) => {
  return (
      <div className="todo-item">
        <input type="checkbox" checked={completed} onChange={() => handleChange(id)}/>
        <p style={completed ? {color: '#cdcdcd', textDecoration: 'line-through'} : {}}>{text}</p>
      </div>
  );
}

export default TodoItem;
