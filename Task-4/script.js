const taskList =
    document.getElementById("taskList");


// Load tasks + products when page opens
window.onload = () => {

    loadTasks();

    displayProducts(products);

};
// ADD TASK
function addTask() {

    const input =
        document.getElementById("taskInput");

    const task =
        input.value.trim();

    // Empty validation
    if (task === "") {

        alert("Please enter a task");

        return;
    }

    // Create task on screen
    createTask(task);

    // Save in local storage
    saveTask(task);

    // Clear input
    input.value = "";
}
// CREATE TASK ELEMENT
function createTask(task) {

    const li =
        document.createElement("li");

    li.innerHTML = `

        <span>${task}</span>

        <button onclick="deleteTask(this,
        '${task}')">

            Delete
        </button>
    `;
    taskList.appendChild(li);
}
// DELETE TASK
function deleteTask(button, task) {
    // Remove from screen
    button.parentElement.remove();
    // Remove from local storage
    let tasks =
        JSON.parse(localStorage.getItem("tasks")) || [];
    tasks =
        tasks.filter(t => t !== task);
    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}
// SAVE TASK
function saveTask(task) {
    let tasks =
        JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}
// LOAD TASKS
function loadTasks() {
    let tasks =
        JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task =>
        createTask(task));
}
// PRODUCT LISTING SECTION
let products = [{
        name: "Laptop",
        category: "electronics",
        price: 850,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
    },
    {
        name: "Mouse",
        category: "electronics",
        price: 25,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db"
    },
    {
        name: "Keyboard",
        category: "electronics",
        price: 45,
        image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae"
    },
    {
        name: "Tablet",
        category: "electronics",
        price: 400,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0"
    },
    {
        name: "iPhone 17",
        category: "electronics",
        price: 1200,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    },
    {
        name: "LG Refrigerator",
        category: "electronics",
        price: 950,
        image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30"
    },
    {
        name: "LG TV",
        category: "electronics",
        price: 700,
        image: "https://images.unsplash.com/photo-1593784991095-a205069470b6"
    },
    {
        name: "Washing Machine",
        category: "electronics",
        price: 600,
        image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1"
    },
    {
        name: "Cosmetics",
        category: "fashion",
        price: 120,
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
    }

];



// DISPLAY PRODUCTS
function displayProducts(items) {

    const container =
        document.getElementById("productContainer");

    container.innerHTML = "";

    items.forEach(product => {

        container.innerHTML += `

        <div class="card">

            <img src="${product.image}"
            alt="${product.name}"
            class="product-image">

            <h3>${product.name}</h3>

            <p>
                Category:
                ${product.category}
            </p>

            <p>
                Price:
                $${product.price}
            </p>

        </div>

        `;
    });
}
// FILTER PRODUCTS
function filterProducts() {

    const selectedCategory =
        document.getElementById("filter").value;

    // Show all products
    if (selectedCategory === "all") {

        displayProducts(products);

    }

    // Filter by category
    else {

        const filteredProducts =
            products.filter(product =>

                product.category === selectedCategory
            );

        displayProducts(filteredProducts);
    }
}
// SORT PRODUCTS
function sortProducts() {
    const selectedSort =
        document.getElementById("sort").value;
    let sortedProducts = [...products];
    // Low to High
    if (selectedSort === "low") {
        sortedProducts.sort(
            (a, b) => a.price - b.price
        );
    }
    // High to Low
    else if (selectedSort === "high") {

        sortedProducts.sort(
            (a, b) => b.price - a.price
        );
    }
    displayProducts(sortedProducts);
}
// CONTACT FORM
function sendMessage(event) {
    event.preventDefault();
    const status =
        document.getElementById("messageStatus");
    const button =
        document.getElementById("sendBtn");
    // Success message
    status.textContent =
        "Message Sent Successfully ✅";
    status.style.color = "green";
    // Disable button temporarily
    button.disabled = true;
    // Enable after 4 seconds
    setTimeout(() => {
        button.disabled = false;
        status.textContent = "";
    }, 4000);
}