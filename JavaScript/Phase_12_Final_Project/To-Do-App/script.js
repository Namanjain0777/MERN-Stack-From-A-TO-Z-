let taskInput = document.getElementById("taskInput");
let dueDateInput = document.getElementById("dueDate");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");
let filter = document.getElementById("filter");
let darkModeToggle = document.getElementById("darkModeToggle");

document.addEventListener("DOMContentLoaded", loadTasks);
addBtn.addEventListener("click", addTask);
filter.addEventListener("change", applyFilter);
darkModeToggle.addEventListener("click", toggleDarkMode);

function addTask() {
    let text = taskInput.value.trim();
    let dueDate = dueDateInput.value;

    if (text === "") return alert("Enter task");

    let task = {
        id: Date.now(),
        text,
        dueDate,
        completed: false
    };

    createTaskElement(task);
    saveTask(task);

    taskInput.value = "";
    dueDateInput.value = "";
}

function createTaskElement(task) {

    let li = document.createElement("li");
    li.draggable = true;
    li.dataset.id = task.id;

    if (task.completed) li.classList.add("completed");

    li.innerHTML = `
        <div class="task-top">
            <span>${task.text} ${task.dueDate ? "(Due: " + task.dueDate + ")" : ""}</span>
            <div>
                <button class="edit">Edit</button>
                <button class="delete">X</button>
            </div>
        </div>
    `;

    li.querySelector("span").addEventListener("click", () => {
        li.classList.toggle("completed");
        updateStorage();
    });

    li.querySelector(".delete").addEventListener("click", () => {
        li.remove();
        updateStorage();
    });

    li.querySelector(".edit").addEventListener("click", () => {
        let newText = prompt("Edit task:", task.text);
        if (newText) {
            task.text = newText;
            updateStorage();
            li.querySelector("span").innerText = newText + (task.dueDate ? " (Due: " + task.dueDate + ")" : "");
        }
    });

    // Drag events
    li.addEventListener("dragstart", () => li.classList.add("dragging"));
    li.addEventListener("dragend", () => {
        li.classList.remove("dragging");
        updateStorage();
    });

    taskList.appendChild(li);
}

taskList.addEventListener("dragover", e => {
    e.preventDefault();
    const dragging = document.querySelector(".dragging");
    const afterElement = getDragAfterElement(taskList, e.clientY);
    if (afterElement == null) {
        taskList.appendChild(dragging);
    } else {
        taskList.insertBefore(dragging, afterElement);
    }
});

function getDragAfterElement(container, y) {
    const elements = [...container.querySelectorAll("li:not(.dragging)")];
    return elements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => createTaskElement(task));
}

function updateStorage() {
    let tasks = [];
    document.querySelectorAll("#taskList li").forEach(li => {
        tasks.push({
            id: li.dataset.id,
            text: li.querySelector("span").innerText.split(" (Due")[0],
            dueDate: "",
            completed: li.classList.contains("completed")
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    applyFilter();
}

function applyFilter() {
    let value = filter.value;
    document.querySelectorAll("#taskList li").forEach(li => {
        if (value === "all") {
            li.style.display = "flex";
        } else if (value === "completed") {
            li.style.display = li.classList.contains("completed") ? "flex" : "none";
        } else {
            li.style.display = !li.classList.contains("completed") ? "flex" : "none";
        }
    });
}

function toggleDarkMode() {
    document.body.classList.toggle("dark");
}
