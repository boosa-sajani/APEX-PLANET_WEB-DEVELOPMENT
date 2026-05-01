// FORM VALIDATION 
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let output = document.getElementById("formMessage");

    // Email regex
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "" || email === "" || message === "") {
        output.textContent = "All fields are required!";
        output.style.color = "red";
        return;
    }

    if (!emailPattern.test(email)) {
        output.textContent = "Invalid email format!";
        output.style.color = "red";
        return;
    }

    output.textContent = "Form submitted successfully!";
    output.style.color = "green";
});


// TO-DO LIST

function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if (task === "") return;

    let li = document.createElement("li");
    li.textContent = task;

    let btn = document.createElement("button");
    btn.textContent = "Delete";

    btn.onclick = function() {
        li.remove();
    };

    li.appendChild(btn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}