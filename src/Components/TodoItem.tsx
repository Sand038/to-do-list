import React, {FC} from "react";

interface ToDoItemProps {
  text: string;
  completed: boolean;
}

const TodoItem: FC<ToDoItemProps> = ({text, completed}) => {
  return (
      <div className="todo-item">
        <input type="checkbox" checked={completed}/>
        <p>{text}</p>
      </div>
  );
}

export default TodoItem;
