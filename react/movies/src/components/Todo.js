import React, { useState, useEffect } from "react";

function Todo() {
  const [todos, setTodos] = useState([{ id: 1, text: "Learn React" }]);
  const [todo, setTodo] = useState({ text: "your todo here" });

  return (
    <div>
      <h3>Todo</h3>
      <input
        type="text"
        value={todo.text}
        onChange={e => setTodo({ text: e.target.value })}
      />
      <button
        onClick={() => {
          todos.push(todo);
          setTodos([...todos]);
        }}
      >
        Add
      </button>
      {todos.map(t => (
        <p>{t.text}</p>
      ))}
    </div>
  );
}

export default Todo;
