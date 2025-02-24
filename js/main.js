// Selektovanje elemenata
const taskList = document.getElementById("taskList");
const newTaskInput = document.getElementById("newTaskInput");
const addTaskBtn = document.getElementById("addTask");

function loadTasks() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
        .then(response => response.json())
        .then(tasks => {
            taskList.innerHTML = "";
            tasks.forEach(task => addTaskToDOM(task));
        }).catch(error => console.error("Doslo je do greske pri dodavanju novog podatka", error));
}




















