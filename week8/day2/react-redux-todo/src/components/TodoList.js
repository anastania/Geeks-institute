import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "../redux/actions";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={todo.completed ? "completed" : ""}>
          <span onClick={() => dispatch(toggleTodo(todo.id))}>
            {todo.text}
          </span>
          <button onClick={() => dispatch(removeTodo(todo.id))}>❌</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
