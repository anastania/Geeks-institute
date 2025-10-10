import React from "react";
import DatePicker from "./components/DatePicker";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>🗓️ Planner Application</h1>
      <DatePicker />
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
