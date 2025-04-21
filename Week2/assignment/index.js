import { todos } from "./data.js";

if (!localStorage.getItem("todos")) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

const todoItems = JSON.parse(localStorage.getItem("todos")) || [];
const table = document.querySelector(".table-body");
const filterButtons = document.querySelectorAll(".tag-container .button");

function renderTodos(todos) {
  table.innerHTML = "";

  todos.forEach((todo) => {
    const tr = document.createElement("tr");

    const tdCheckbox = document.createElement("td");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    tdCheckbox.appendChild(checkbox);

    const tdPriority = document.createElement("td");
    tdPriority.textContent = todo.priority;

    const tdStatus = document.createElement("td");
    tdStatus.textContent = todo.completed ? "✅" : "❌";

    const tdTodo = document.createElement("td");
    tdTodo.textContent = todo.title;

    tr.appendChild(tdCheckbox);
    tr.appendChild(tdPriority);
    tr.appendChild(tdStatus);
    tr.appendChild(tdTodo);

    table.appendChild(tr);
  });
}

document.querySelector(".all").addEventListener("click", () => {
  renderTodos(todoItems);
});

document.querySelector(".finished").addEventListener("click", () => {
  const filtered = todoItems.filter((todo) => todo.completed);
  renderTodos(filtered);
});

document.querySelector(".unfinished").addEventListener("click", () => {
  const filtered = todoItems.filter((todo) => !todo.completed);
  renderTodos(filtered);
});

renderTodos(todoItems);
