// PRODUCTS DATA
let products = [

    {
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

    // STOP IF CONTAINER NOT FOUND
    if (!container) return;

    // CLEAR OLD PRODUCTS
    container.innerHTML = "";

    // LOOP PRODUCTS
    items.forEach(product => {

        container.innerHTML += `

        <div class="card">

            <img
            src="${product.image}"

            alt="${product.name}"

            class="product-image"

            loading="lazy">


            <h3>
                ${product.name}
            </h3>


            <p>
                Category:
                ${product.category}
            </p>


            <p>
                Price:
                $${product.price}
            </p>


            <!-- ADD TO CART -->

            <button onclick="addToCart(
            '${product.name}',
            ${product.price}
            )">

                Add To Cart

            </button>


            <!-- BUY NOW -->

            <button onclick="buyNow(
            '${product.name}',
            ${product.price}
            )">

                Buy Now

            </button>

        </div>

        `;
    });
}
// FILTER PRODUCTS

function filterProducts() {

    const selectedCategory =
        document.getElementById("filter").value;

    // SHOW ALL
    if (selectedCategory === "all") {

        displayProducts(products);
    }

    // FILTER PRODUCTS
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


    // LOW TO HIGH
    if (selectedSort === "low") {

        sortedProducts.sort(

            (a, b) => a.price - b.price
        );
    }


    // HIGH TO LOW
    else if (selectedSort === "high") {

        sortedProducts.sort(

            (a, b) => b.price - a.price
        );
    }

    displayProducts(sortedProducts);
}
// SHOPPING CART

let cart =

    JSON.parse(localStorage.getItem("cart"))

||
[];

// ADD TO CART

function addToCart(name, price) {

    cart.push({ name, price });


    // SAVE CART
    localStorage.setItem(

        "cart",

        JSON.stringify(cart)
    );


    // UPDATE CART COUNT
    updateCartCount();


    alert(name + " added to cart ✅");
}
// UPDATE CART COUNT

function updateCartCount() {

    const cartCount =
        document.getElementById("cartCount");

    if (cartCount) {

        cartCount.textContent =
            cart.length;
    }
}

// DISPLAY CART
// =====================================================
// DISPLAY CART
// =====================================================

function displayCart() {

    const cartContainer =
        document.getElementById("cartContainer");

    const total =
        document.getElementById("cartTotal");


    // STOP IF PAGE NOT FOUND
    if (!cartContainer || !total) return;


    // EMPTY CART
    if (cart.length === 0) {

        cartContainer.innerHTML = `

        <h3 class="empty-cart">

            Your cart is empty 🛒

        </h3>

        `;

        total.style.display = "none";

        return;
    }


    // SHOW TOTAL
    total.style.display = "block";

    // CLEAR OLD CONTENT
    cartContainer.innerHTML = "";

    let totalPrice = 0;


    // DISPLAY PRODUCTS
    cart.forEach((item, index) => {

        totalPrice += item.price;


        cartContainer.innerHTML += `

        <div class="card">

            <h3>
                ${item.name}
            </h3>

            <p>
                Price: $${item.price}
            </p>


            <!-- REMOVE BUTTON -->

            <button
            class="remove-btn"

            onclick="removeCartItem(${index})">

                Remove Item

            </button>

        </div>

        `;
    });


    // UPDATE TOTAL
    total.textContent =
        `Total: $${totalPrice}`;
}
// REMOVE CART ITEM

function removeCartItem(index) {

    // REMOVE ITEM
    cart.splice(index, 1);


    // UPDATE STORAGE
    localStorage.setItem(

        "cart",

        JSON.stringify(cart)
    );


    // REFRESH CART
    displayCart();

    updateCartCount();
}
// BUY NOW
function buyNow(name, price) {

    localStorage.setItem(

        "buyNowProduct",

        JSON.stringify({ name, price })
    );


    // REDIRECT TO CHECKOUT
    window.location.href =
        "checkout.html";
}

// CHECKOUT PAGE

function displayCheckoutProduct() {

    const productDetails =
        document.getElementById("productDetails");

    if (!productDetails) return;


    const product =

        JSON.parse(
            localStorage.getItem(
                "buyNowProduct"
            )
        );


    if (product) {

        productDetails.innerHTML = `

        <div class="card">

            <h3>
                ${product.name}
            </h3>

            <p>
                Price:
                $${product.price}
            </p>

        </div>

        `;
    }
}

// PLACE ORDER

function placeOrder(event) {

    event.preventDefault();

    const message =
        document.getElementById("orderMessage");


    message.textContent =

        "Order Placed Successfully ✅";


    message.style.color =
        "green";


    // CLEAR MESSAGE
    setTimeout(() => {

        message.textContent = "";

    }, 4000);
}

// CONTACT FORM

function sendMessage(event) {

    event.preventDefault();

    const status =
        document.getElementById("messageStatus");

    const button =
        document.getElementById("sendBtn");


    status.textContent =

        "Message Sent Successfully ✅";


    status.style.color =
        "green";


    button.disabled = true;


    // ENABLE AFTER 4 SECONDS
    setTimeout(() => {

        button.disabled = false;

        status.textContent = "";

    }, 4000);
}
// INITIAL PAGE LOAD
window.onload = () => {

    // DISPLAY PRODUCTS
    displayProducts(products);

    // UPDATE CART COUNT
    updateCartCount();

    // DISPLAY CART
    displayCart();

    // DISPLAY CHECKOUT PRODUCT
    displayCheckoutProduct();
};