let button = document.getElementById('btn')
let title = document.getElementById('title')

let isStarted = false;

button.addEventListener("click", function(){
    if (isStarted === false) {
        isStarted = true;

        button.innerText = "Started!";
        title.innerText = "Welcome Back!";
        document.body.style.backgroundColor = "#ddd";
    } else {
        isStarted = false;

        button.innerText = "Get Started";
        title.innerText = "Welcome to My Website";
        document.body.style.backgroundColor = "white";
    }
});