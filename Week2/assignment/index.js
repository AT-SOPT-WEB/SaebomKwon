import { todos } from "./data.js";

if (!localStorage.getItem("todos")) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

const todoItems = JSON.parse(localStorage.getItem("todos")) || [];
const table = document.querySelector(".table-body");

function renderTodos(todos) {
  table.innerHTML = "";
  todos.forEach((todo) => {
    const tr = document.createElement("tr");

    const tdCheckbox = document.createElement("td");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.dataset.id = todo.id;
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

document.querySelector(".add").addEventListener("click", () => {
  const input = document.querySelector(".input");
  const item = input.value.trim();

  const prioritySelect = document.querySelector(".priority");
  const priority = prioritySelect.value;

  if (!item || !priority) {
    alert("할 일과 중요도를 모두 입력해주세요!");
    return;
  }

  const todos = JSON.parse(localStorage.getItem("todos")) || [];

  const newId = todos[todos.length - 1].id + 1;

  const newTodo = {
    id: newId,
    title: item,
    priority: Number(priority),
    completed: false,
  };

  todos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));

  renderTodos(todos);

  input.value = "";
  prioritySelect.value = "";
});

document.querySelector(".check-all").addEventListener("change", (e) => {
  const checked = e.target.checked;
  const checkboxes = document.querySelectorAll(
    ".table-body input[type='checkbox']"
  );

  checkboxes.forEach((checkbox) => {
    checkbox.checked = checked;
  });
});

document.querySelector(".delete").addEventListener("click", () => {
  const checkboxes = document.querySelectorAll(
    "input[type='checkbox']:checked"
  );
  const checkedTodo = Array.from(checkboxes).map((checkbox) =>
    Number(checkbox.dataset.id)
  );

  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos = todos.filter((todo) => !checkedTodo.includes(todo.id));

  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos(todos);
});

document.querySelector(".done").addEventListener("click", () => {
  const checkboxes = document.querySelectorAll(
    "input[type='checkbox']:checked"
  );
  const checkedTodo = Array.from(checkboxes).map((checkbox) =>
    Number(checkbox.dataset.id)
  );

  let todos = JSON.parse(localStorage.getItem("todos")) || [];

  const alreadyDone = todos.some(
    (todo) => checkedTodo.includes(todo.id) && todo.completed
  );

  if (alreadyDone) {
    openModal();
    return;
  }

  todos = todos.map((todo) => {
    if (checkedTodo.includes(todo.id)) {
      return { ...todo, completed: true };
    }
    return todo;
  });

  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos(todos);
});

function openModal() {
  document.querySelector(".modal").classList.remove("hidden");
}

document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".modal").classList.add("hidden");
});
