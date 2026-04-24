let taskInput = document.getElementById('taskInput');
let button = document.getElementById('addBtn');
let list = document.getElementById('taskList');


button.addEventListener("click", function () {

    let task = taskInput.value;

    if (task === "") {
        return;
    }

    let li = document.createElement("li");
    li.innerText = task;

    li.addEventListener("click", function () {
        li.remove();
    });

    list.appendChild(li);

    taskInput.value = ""; // fixed
});
taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        button.click();
    }
});
    



