var taskInput = document.getElementById("taskInput");
var addButton = document.getElementById("addButton");
var taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);


function addTask() {
  var taskText = taskInput.value;

  if (taskText.trim() !== "") {
    var li = document.createElement("li");
    li.innerText = taskText;

 
    li.addEventListener("click", completeTask);

    taskList.appendChild(li);
    taskInput.value = "";
  }
}

function completeTask(event) {
  var taskItem = event.target;

  if (taskItem.classList.contains("completed")) {
    taskItem.classList.remove("completed");
  } else {
    taskItem.classList.add("completed");
  }
}
