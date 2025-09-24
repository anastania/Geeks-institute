// app.js
import { TodoList } from "./todo.js";

const myTodos = new TodoList();
myTodos.addTask("Learn Node.js");
myTodos.addTask("Build a project");
myTodos.completeTask(0);

console.log(myTodos.listTasks());

