const taskList = document.getElementById("task-list");
const newTaskInput = document.getElementById("new-task");

function addTask() {
  const taskText = newTaskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete" onclick="deleteTask(this)">Delete</button>
        <button class="complete" onclick="completeTask(this)">Complete</button>
    `;

  taskList.appendChild(li);
  newTaskInput.value = "";
}

function deleteTask(button) {
  const li = button.parentElement;
  taskList.removeChild(li);
}

function completeTask(button) {
  const li = button.parentElement;
  li.classList.toggle("completed");

  const span = li.querySelector("span");
  if (li.classList.contains("completed")) {
    span.innerHTML = `${span.innerHTML} (Finished)`;
  } else {
    span.innerHTML = span.innerHTML.replace(" (Finished)", "");
  }
}

function clearAll() {
  const completedTasks = document.querySelectorAll(".completed");
  completedTasks.forEach((task) => {
    taskList.removeChild(task);
  });
}
