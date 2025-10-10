import React from "react";
import { useTasks } from "../context/TaskContext";

const TaskItem = ({ task }) => {
  const { dispatch } = useTasks();

  return (
    <li
      style={{
        backgroundColor: "#f7f7f7",
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span
        onClick={() =>
          dispatch({ type: "TOGGLE_TASK", payload: task.id })
        }
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          color: task.completed ? "#888" : "#000",
          cursor: "pointer",
        }}
      >
        {task.text}
      </span>

      <button
        onClick={() =>
          dispatch({ type: "REMOVE_TASK", payload: task.id })
        }
        style={{
          backgroundColor: "#FF4C4C",
          color: "white",
          border: "none",
          borderRadius: "6px",
          padding: "5px 10px",
          cursor: "pointer",
        }}
      >
        ❌
      </button>
    </li>
  );
};

export default TaskItem;

