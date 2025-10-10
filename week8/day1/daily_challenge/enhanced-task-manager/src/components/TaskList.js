import React from "react";
import { useTasks } from "../context/TaskContext";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { state, dispatch } = useTasks();
  const { tasks, filter } = state;

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "active") return !task.completed;
    return true;
  });

  return (
    <div>
      <div style={{ marginBottom: "15px" }}>
        <button
          onClick={() => dispatch({ type: "FILTER_TASKS", payload: "all" })}
          style={{ marginRight: "8px" }}
        >
          All
        </button>
        <button
          onClick={() => dispatch({ type: "FILTER_TASKS", payload: "completed" })}
          style={{ marginRight: "8px" }}
        >
          Completed
        </button>
        <button
          onClick={() => dispatch({ type: "FILTER_TASKS", payload: "active" })}
        >
          Active
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
