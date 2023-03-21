import React, { useState } from "react";

const Todolist = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <>
      <ul>
        <li>
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                setTodos(todos.concat([inputValue]));
                setInputValue("");
              }
            }}
            placeholder="What needs to be done?"
          ></input>
        </li>

        {todos.map((item, index) => (
          <li>
            {item}

            <i
              class="fas fa-trash-alt"
              onClick={() =>
                setTodos(
                  todos.filter((t, currentIndex) => {
                    return index !== currentIndex;
                  })
                )
              }
            ></i>
          </li>
        ))}
      </ul>
      <ul>
        <li>
          <span className="tasks d-flex">
            {todos.length === 0
              ? "No Tasks, add a Task!"
              : todos.length === 1
              ? todos.length + " Item Left"
              : todos.length + " Item Left"}
          </span>
        </li>
      </ul>
    </>
  );
};

export default Todolist;
