import React, { useState, useRef } from "react";
import { useTasks } from "../context/TaskContext";

const TaskItem = ({ task }) => {
  const { dispatch } = useTasks();
  const [isEditing, setIsEditing] = useState(false);
  const editRef = useRef();

  const handleToggle = () => {
    dispatch({ type: "TOGGLE_TASK", payload: task.id });
  };

  const handleEdit = () => {
    if (isEditing) {
      dispatch({
        type: "EDIT_TASK",
        payload: { id: task.id, text: editRef.current.value },
      });
    }
    setIsEditing(!isEditing);
  };

  return (
    <li
      style={{
        marginBottom: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#f2f2f2",
        padding: "10px",
        borderRadius: "8px",
      }}
    >
      {isEditing ? (
        <input
          ref={editRef}
          defaultValue={task.text}
          style={{
            padding: "5px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            width: "70%",
          }}
        />
      ) : (
        <span
          onClick={handleToggle}
          style={{
            textDecoration: task.completed ? "line-through" : "none",
            color: task.completed ? "#888" : "#000",
            cursor: "pointer",
            width: "70%",
          }}
        >
          {task.text}
        </span>
      )}

      <button
        onClick={handleEdit}
        style={{
          backgroundColor: isEditing ? "#4CAF50" : "#FFD700",
          color: "#000",
          border: "none",
          padding: "5px 10px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
};

export default TaskItem;
