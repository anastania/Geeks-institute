import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../redux/actions";

const TaskForm = () => {
  const [taskText, setTaskText] = useState("");
  const selectedDay = useSelector((state) => state.selectedDay);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (taskText.trim() !== "") {
      dispatch(addTask(selectedDay, taskText));
      setTaskText("");
    }
  };

  return (
    <div className="task-form">
      <input
        type="text"
        placeholder="Add new task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TaskForm;
