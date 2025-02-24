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

function addTaskToDOM(task) {
    const li = document.createElement("li");
    li.textContent = task.title;
    if (task.completed) {
        li.style.textDecoration = "line-though";
    }
    taskList.appendChild(li);
}

addTaskBtn.addEventListener("click", () => {
    const newTask = {
        title: newTaskInput.value,
        completed: false
    };
    fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newTask)
    }).then(response => response.json())
        .then(data => {
            addTaskToDOM(data);
            newTaskInput.value = "";
        }).catch(error => console.error("Doslo je do greske pri dodavanju zadatka", error));
});

loadTasks();



















