import React from "react";
import { MdDelete } from "react-icons/md";

export default function Todo({ todo, deleteTodo, toggleComplete }) {
  return (
    <div className="todos">
      <input
        className="checkbox"
        onChange={() => toggleComplete(todo)}
        type="checkbox"
        checked={todo.completed ? "checked" : ""}
      />
      <div>
        <p
          style={{ color: "white" }}
          onClick={() => toggleComplete(todo)}
          className={todo.completed ? "line" : "text"}
        >
          {todo.text}
        </p>
      </div>
      <MdDelete
        onClick={() => deleteTodo(todo.id)}
        style={{ cursor: "pointer", width: 30, height: 30 }}
        className="delete-btn"
      />
    </div>
  );
}
