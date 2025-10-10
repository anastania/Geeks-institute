import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editTask, deleteTask } from "../redux/actions";

const TaskList = () => {
  const selectedDay = useSelector((state) => state.selectedDay);
  const tasks = useSelector((state) => state.tasksByDay[selectedDay] || []);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [newText, setNewText] = useState("");

  return (
    <div className="task-list">
      <h3>Tasks for {selectedDay}</h3>
      {tasks.length === 0 && <p>No tasks for this day.</p>}

      {tasks.map((task) => (
        <div key={task.id} className="task-item">
          {editId === task.id ? (
            <>
              <input
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
              />
              <button
                onClick={() => {
                  dispatch(editTask(selectedDay, task.id, newText));
                  setEditId(null);
                }}
              >
                Save
              </button>
            </>
          ) : (
            <>
              <span>{task.text}</span>
              <button onClick={() => { setEditId(task.id); setNewText(task.text); }}>Edit</button>
              <button onClick={() => dispatch(deleteTask(selectedDay, task.id))}>
                Delete
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
