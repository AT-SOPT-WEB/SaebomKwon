import { todos } from "./data.js";

localStorage.setItem("todos", JSON.stringify(todos));

console.log(todos);
