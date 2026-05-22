let cart =
    JSON.parse(localStorage.getItem("cart")) ||
    [];

const container =
    document.getElementById("cartContainer");

const total =
    document.getElementById("cartTotal");

let totalPrice = 0;


// DISPLAY CART ITEMS
cart.forEach(item => {

    totalPrice += item.price;

    container.innerHTML += `

    <div class="card">

        <h3>${item.name}</h3>

        <p>
            Price:
            $${item.price}
        </p>

    </div>

    `;
});


// TOTAL
total.textContent =
    `Total: $${totalPrice}`;