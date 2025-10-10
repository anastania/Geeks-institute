import React, { useRef } from "react";
import { useTasks } from "../context/TaskContext";

const TaskForm = () => {
  const { dispatch } = useTasks();
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = inputRef.current.value.trim();
    if (text === "") return;

    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };

    dispatch({ type: "ADD_TASK", payload: newTask });
    inputRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter a task..."
        style={{
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          marginRight: "10px",
        }}
      />
      <button
        type="submit"
        style={{
          backgroundColor: "#3D86CB",
          color: "white",
          border: "none",
          borderRadius: "8px",
          padding: "10px 15px",
          cursor: "pointer",
        }}
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
