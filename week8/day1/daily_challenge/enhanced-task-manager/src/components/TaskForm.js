import React, { useRef } from "react";
import { useTasks } from "../context/TaskContext";

const TaskForm = () => {
  const { dispatch } = useTasks();
  const inputRef = useRef();

  const handleAddTask = (e) => {
    e.preventDefault();
    const text = inputRef.current.value.trim();
    if (text === "") return;

    dispatch({
      type: "ADD_TASK",
      payload: { id: Date.now(), text, completed: false },
    });

    inputRef.current.value = "";
  };

  return (
    <form onSubmit={handleAddTask} style={{ marginBottom: "20px" }}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Add a new task..."
        style={{
          padding: "10px",
          width: "250px",
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
          padding: "10px 15px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
