const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", function() {
  const taskValue = taskInput.value;
  
  if (taskValue) {
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `${taskValue} <button type="button" class="deleteTaskButton">Delete</button>`;
    taskList.appendChild(taskItem);
    taskInput.value = "";

    taskItem.querySelector(".deleteTaskButton").addEventListener("click", function() {
      taskItem.remove();
    });
  }
});


