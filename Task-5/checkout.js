// GET PRODUCT
const product =
    JSON.parse(
        localStorage.getItem("buyNowProduct")
    );


// DISPLAY PRODUCT
document.getElementById("productDetails")
    .innerHTML = `

<h3>${product.name}</h3>

<p>
Price:
$${product.price}
</p>

`;


// PLACE ORDER
function placeOrder(event) {

    event.preventDefault();

    const message =
        document.getElementById("orderMessage");

    message.textContent =
        "Order Placed Successfully ✅";

    message.style.color =
        "green";
}