import React from "react";
import { useTasks } from "../context/TaskContext";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { state } = useTasks();
  const { tasks } = state;

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tasks.length > 0 ? (
        tasks.map((task) => <TaskItem key={task.id} task={task} />)
      ) : (
        <p>No tasks yet. Add one!</p>
      )}
    </ul>
  );
};

export default TaskList;
