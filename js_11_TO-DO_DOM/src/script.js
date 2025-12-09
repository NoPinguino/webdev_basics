document.addEventListener("DOMContentLoaded", () => {
  // Load saved data:
  const saved = JSON.parse(localStorage.getItem("tasks")) || [];
  saved.forEach((objTask) => {
    addTask(objTask.text, objTask.checked_status, objTask.priority);
  });
  // Basic elements for application flow:
  const btnSubmit = document.getElementById("btn_submit-task");
  const btnDelete = document.getElementById("btn_delete");
  const inpNewTask = document.getElementById("inp_new-task");
  const prioritySelector = document.getElementById("sel_task-priority");
  // Basic event listeners:
  btnSubmit.addEventListener("click", () => {
    addTask(inpNewTask.value, false, prioritySelector.value); // checked-status false since is a new task
    inpNewTask.value = "";
  });
  inpNewTask.addEventListener("keydown", (k) => {
    if (k.key === "Enter") {
      addTask(inpNewTask.value, false, prioritySelector.value); // checked-status false since is a new task
      inpNewTask.value = "";
    }
  });
  btnDelete.addEventListener("click", () => {
    if (window.confirm("Are you sure you want to delete all checked tasks?")) {
      deleteCheckedTask();
    }
  });
});
// Add task
function addTask(taskText, checkedStatus, taskPriority) {
  const newTask = createTask(taskText, checkedStatus); // New tasks are always unchecked, so we send false
  if (taskPriority === "high-priority") {
    document.getElementById("high-priority-list").appendChild(newTask);
    togglePlaceholderVisibility("high-priority-list", "empty_high-list");
  } else {
    document.getElementById("normal-priority-list").appendChild(newTask);
    togglePlaceholderVisibility("normal-priority-list", "empty_normal-list");
  }
  saveTasks();
}
// Create task: retrives task creator input and returns the task-wrapper (functions like a constructor for tasks)
function createTask(liTextContent, checkedStatus) {
  let taskWrapper = document.createElement("div");
  taskWrapper.classList.add(
    "flex",
    "gap-2",
    "items-center",
    "animation-fadeInOut",
    "task-wrapper", // Class used to count items when it comed to hide / display the placeholder.
  );
  let taskCheckbox = document.createElement("input");
  taskCheckbox.type = "checkbox";
  taskCheckbox.classList.add("w-5", "h-5");
  taskCheckbox.checked = checkedStatus;
  let taskText = document.createElement("li");
  taskText.textContent = liTextContent;
  taskWrapper.append(taskCheckbox, taskText);
  return taskWrapper;
}
// Delete task
function deleteCheckedTask() {
  const checkboxes = document.querySelectorAll(
    "div.task-wrapper input:checked",
  );
  for (let check of checkboxes) {
    check.parentElement.remove();
  }
  togglePlaceholderVisibility("high-priority-list", "empty_high-list");
  togglePlaceholderVisibility("normal-priority-list", "empty_normal-list");
  saveTasks();
}
// Save current tasks in localStorage:
function saveTasks() {
  const savedTasks = [];
  // Save each task as an object inside savedTasks:
  document.querySelectorAll("div.task-wrapper").forEach((div) => {
    savedTasks.push({
      text: div.querySelector("li").textContent,
      checked_status: div.querySelector("input").checked,
      priority:
        div.parentElement.id === "high-priority-list"
          ? "high-priority"
          : "normal-priority",
    });
  });
  localStorage.setItem("tasks", JSON.stringify(savedTasks));
}
function togglePlaceholderVisibility(listId, placeholderId) {
  const list = document.getElementById(listId);
  const placeholder = document.getElementById(placeholderId);
  if (list.querySelectorAll("div.task-wrapper").length > 0) {
    placeholder.classList.add("hidden");
  } else {
    placeholder.classList.remove("hidden");
  }
}
