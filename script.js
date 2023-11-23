document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("addTaskButton").addEventListener("click", addTask);
});

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" onclick="toggleTask(this)"> ${taskInput.value}`;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

function toggleTask(checkbox) {
    checkbox.parentElement.classList.toggle("completed");
}
