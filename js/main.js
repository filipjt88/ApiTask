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
    // Create checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => {
        task.completed = checkbox.checked;
        taskText.style.textDecoration = task.completed ? "line-though" : "none";
    });

    // Text task
    const taskText = document.createElement("span");
    taskText.textContent = task.title;
    taskText.style.marginLeft = "8px";
    if (task.completed) {
        taskText.style.textDecoration = 'line-though';
    }
    li.textContent = task.title;
    if (task.completed) {
        li.style.textDecoration = "line-though";
    }

    // Delete task
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.onclick = () => {
        li.remove();
        console.log(`Task is ${task.title} removed`);

    }

    taskList.appendChild(li);
    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(deleteBtn);
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



















