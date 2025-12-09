// Load script once page is loaded:
document.addEventListener("DOMContentLoaded", () => {
  // Restore data if saved:
  const saved = JSON.parse(localStorage.getItem("tasks")) || [];
  saved.forEach((objTask) => {
    addSavedTask(objTask.text, objTask.checked_status, objTask.priority);
  });

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
  newTaskDiv.classList.add(
    "flex",
    "gap-2",
    "items-center",
    "animation-fadeInOut",
    "task-item", // This class does not have any style, is made to count tasks.
  );
  newTaskCheck.classList.add("w-5", "h-5");
  // Append to correct list and hides placeholder if list was empty:
  if (priorityValue === "high-priority") {
    if (!highList.firstElementChild.classList.contains("hidden")) {
      document.getElementById("empty_high-list").classList.add("hidden");
    }
    highList.append(newTaskDiv);
  } else {
    if (!normalList.firstElementChild.classList.contains("hidden")) {
      document.getElementById("empty_normal-list").classList.add("hidden");
    }
    normalList.append(newTaskDiv);
  }
  // Rest input value:
  newTaskInput.value = "";
  // Save state in localStorage
  saveTasks();
}
function deleteTasks() {
  const highList = document.getElementById("high-priority-list");
  const normalList = document.getElementById("normal-priority-list");
  // I retrieve al checked inputs with type checkbox
  const checkboxes = document.querySelectorAll("div input:checked");
  for (let check of checkboxes) {
    check.parentElement.remove();
  }
  // Displays placeholder again if list is empty:
  if (highList.querySelectorAll("div.task-item").length === 0) {
    document.getElementById("empty_high-list").classList.remove("hidden");
  }
  if (normalList.querySelectorAll("div.task-item").length === 0) {
    document.getElementById("empty_normal-list").classList.remove("hidden");
  }
  // Save state in localStorage
  saveTasks();
}
function saveTasks() {
  const allTasks = [];
  // We will save data as JSON, so we need to covert each task into object (JSON format)
  document.querySelectorAll("div.task-item").forEach((taskDiv) => {
    allTasks.push({
      text: taskDiv.querySelector("li").textContent,
      checked_status: taskDiv.querySelector("input").checked, // True if checked -> False if not checked
      priority:
        taskDiv.parentElement.id === "high-priority-list" ? "high" : "normal",
    });
  });

  localStorage.setItem("tasks", JSON.stringify(allTasks));
}
function addSavedTask(taskText, taskCheckedStatus, taskPriority) {
  // Lists:
  const highList = document.getElementById("high-priority-list");
  const normalList = document.getElementById("normal-priority-list");
  // Create html elements and add values:
  let newTaskDiv = document.createElement("div");
  let newTaskCheck = document.createElement("input");
  newTaskCheck.type = "checkbox";
  newTaskCheck.checked = taskCheckedStatus; // Boolean value
  let newTask = document.createElement("li");
  newTask.textContent = taskText;
  // Append childs:
  newTaskDiv.append(newTaskCheck, newTask);
  // Tailwind styles of the div:
  newTaskDiv.classList.add(
    "flex",
    "gap-2",
    "items-center",
    "animation-fadeInOut",
    "task-item", // This class does not have any style, is made to count tasks.
  );
  newTaskCheck.classList.add("w-5", "h-5");
  if (taskPriority === "high") {
    highList.append(newTaskDiv);
  } else {
    normalList.append(newTaskDiv);
  }
}
