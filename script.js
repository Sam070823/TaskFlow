const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const taskText = input.value.trim();

    if (taskText === "") {
        return;
    }

    const li = document.createElement("li");

    li.textContent = taskText;

    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    list.appendChild(li);

    input.value = "";
});

