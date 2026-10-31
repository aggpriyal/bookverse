// GET ELEMENTS
const checkoutForm = document.getElementById("checkout-form");
const checkoutItems = document.getElementById("checkout-items");
const checkoutTotal = document.getElementById("checkout-total");
const checkoutMessage = document.getElementById("checkout-message");

// CHECK LOGIN
if (!currentUser || !localStorage.getItem("token")) {
    alert("Please login before checkout.");
    window.location.href = "books.html";
}

// DISPLAY ORDER
function displayCheckout() {
    checkoutItems.innerHTML = "";

    if (cart.length === 0) {
        checkoutItems.innerHTML = "<p>Your cart is empty.</p>";
        checkoutTotal.innerText = 0;
        return;
    }

    let total = 0;

    cart.forEach(function(item) {
        total = total + item.price * item.quantity;

        checkoutItems.innerHTML += `
            <div class="checkout-item">
                <div>
                    <strong>${item.title}</strong>
                    <p>${item.author}</p>
                </div>
                <span>₹${item.price} × ${item.quantity}</span>
            </div>
        `;
    });

    checkoutTotal.innerText = total;
}

// DISPLAY CART
displayCheckout();

// PLACE ORDER
if (checkoutForm) {
    checkoutForm.addEventListener("submit", async function(event) {
        event.preventDefault();

        const name = document.getElementById("checkout-name").value.trim();
        const email = document.getElementById("checkout-email").value.trim();
        const address = document.getElementById("checkout-address").value.trim();
        const pincode = document.getElementById("checkout-pincode").value.trim();
        const payment = document.getElementById("payment-method").value;

        // CHECK PIN CODE
        if (!/^[0-9]{6}$/.test(pincode)) {
            checkoutMessage.innerText =
                "Please enter a valid 6 digit PIN code.";
            return;
        }

        // CHECK EMPTY CART
        if (cart.length === 0) {
            checkoutMessage.innerText = "Your cart is empty.";
            return;
        }

        // GET LOGIN TOKEN
        const token = localStorage.getItem("token");

        // PREPARE ORDER DATA
        const orderData = {
            name: name,
            email: email,
            address: address,
            pincode: pincode,
            paymentMethod: payment,

            items: cart.map(function(item) {
                return {
                    bookId: item.id,
                    quantity: item.quantity
                };
            })
        };

        try {
            checkoutMessage.innerText = "Placing your order...";

            const response = await fetch("http://localhost:3000/api/orders", {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token
                },

                body: JSON.stringify(orderData)
            });

            const data = await response.json();

            // CHECK SERVER RESPONSE
            if (!response.ok) {
                throw new Error(data.message || "Could not place your order.");
            }

            // ORDER SAVED SUCCESSFULLY
            checkoutMessage.innerText =
                "Order placed successfully! Your order ID is " +
                data.order._id;

            // EMPTY CART ONLY AFTER SUCCESS
            cart = [];
            saveCart();

            // RESET FORM AND SUMMARY
            checkoutForm.reset();
            displayCheckout();

        } catch (error) {
            console.error("Checkout error:", error);

            checkoutMessage.innerText = error.message;
        }
    });
}