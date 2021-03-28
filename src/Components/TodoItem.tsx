import React from "react";

export class TodoItem extends React.Component {
  render() {
    return (
        <div className="todo-item">
          <input type="checkbox"/>
          <p>Placeholder text here</p>
        </div>
    );
  }
}
