// Load script once page is loaded:
document.addEventListener("DOMContentLoaded", () => {
  // Task-Creator elements:
  const newTaskInput = document.getElementById("inp_new-task");
  const prioritySelector = document.getElementById("sel_task-priority");
  const btnSubmitTask = document.getElementById("btn_submit-task");
  const btnDelete = document.getElementById("btn_delete");

  // Add to list:
  btnSubmitTask.addEventListener("click", () => {
    addTask(newTaskInput, prioritySelector.value);
  });
  newTaskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      addTask(newTaskInput, prioritySelector.value);
    }
  });
  // Remove selected items:
  btnDelete.addEventListener("click", () => {
    if (window.confirm("Are you sure you want to delete all selected tasks?")) {
      deleteTasks();
    } else {
      return;
    }
  });
});
function addTask(newTaskInput, priorityValue) {
  if (newTaskInput.value === "") {
    alert("Cannot add blank task, please, write content.");
    return;
  }
  // Lists:
  const highList = document.getElementById("high-priority-list");
  const normalList = document.getElementById("normal-priority-list");
  // Create html elements and add values:
  let newTaskDiv = document.createElement("div");
  let newTaskCheck = document.createElement("input");
  newTaskCheck.type = "checkbox";
  let newTask = document.createElement("li");
  newTask.textContent = newTaskInput.value;
  // Append childs:
  newTaskDiv.append(newTaskCheck, newTask);
  // Tailwind styles of the div:
  newTaskDiv.classList.add("flex", "gap-2", "items-center");
  newTaskCheck.classList.add("w-5", "h-5");
  // Append to correct list:
  if (priorityValue === "high-priority") {
    highList.append(newTaskDiv);
  } else {
    normalList.append(newTaskDiv);
  }
  newTaskInput.value = "";
}
function deleteTasks() {
  // I retrieve al checked inputs with type checkbox
  const checkboxes = document.querySelectorAll("div input:checked");
  for (let check of checkboxes) {
    check.parentElement.remove();
  }
}
