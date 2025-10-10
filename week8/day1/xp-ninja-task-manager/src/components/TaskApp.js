import React from "react";
import { TaskProvider } from "../context/TaskContext";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const TaskApp = () => {
  return (
    <TaskProvider>
      <div
        style={{
          textAlign: "center",
          backgroundColor: "#CFE4FB",
          borderRadius: "12px",
          padding: "30px",
          margin: "50px auto",
          width: "400px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h2>⚡ Task Manager (useReducer + useContext)</h2>
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default TaskApp;
