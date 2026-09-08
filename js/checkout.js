// GET ELEMENTS

const checkoutForm =
    document.getElementById("checkout-form");

const checkoutItems =
    document.getElementById("checkout-items");

const checkoutTotal =
    document.getElementById("checkout-total");



// CHECK LOGIN 
if (!currentUser) {

    alert("Please login before checkout.");

    window.location.href = "books.html";

}



// DISPLAY ORDER


function displayCheckout() {

    checkoutItems.innerHTML = "";


    // CHECK CART

    if (cart.length === 0) {

        checkoutItems.innerHTML =
            "<p>Your cart is empty.</p>";

        checkoutTotal.innerText = 0;

        return;

    }


    let total = 0;


    cart.forEach(function(item) {

        total =
            total +
            item.price * item.quantity;


        checkoutItems.innerHTML += `

            <div class="checkout-item">

                <div>

                    <strong>
                        ${item.title}
                    </strong>

                    <p>
                        ${item.author}
                    </p>

                </div>

                <span>
                    ₹${item.price} × ${item.quantity}
                </span>

            </div>

        `;

    });
    checkoutTotal.innerText = total;
}

// DISPLAY CART

displayCheckout();
// PLACE ORDER


if (checkoutForm) {

    checkoutForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document.getElementById(
                    "checkout-name"
                ).value;


            const email =
                document.getElementById(
                    "checkout-email"
                ).value;


            const address =
                document.getElementById(
                    "checkout-address"
                ).value;


            const pincode =
                document.getElementById(
                    "checkout-pincode"
                ).value;


            const payment =
                document.getElementById(
                    "payment-method"
                ).value;


            // PIN CODE VALIDATION

            if (!/^[0-9]{6}$/.test(pincode)) {

                document.getElementById(
                    "checkout-message"
                ).innerText =
                    "Please enter a valid 6 digit PIN code.";

                return;

            }


            // CHECK EMPTY CART

            if (cart.length === 0) {

                document.getElementById(
                    "checkout-message"
                ).innerText =
                    "Your cart is empty.";

                return;

            }


            // CREATE ORDER

            const order = {

                name: name,

                email: email,

                address: address,

                pincode: pincode,

                payment: payment,

                items: cart,

                total: Number(
                    checkoutTotal.innerText
                ),

                date: new Date().toLocaleString()

            };
            // SAVE ORDER

            localStorage.setItem(
                "lastOrder",
                JSON.stringify(order)
            );


            // EMPTY CART

            cart = [];

            saveCart();


            // SHOW MESSAGE

            document.getElementById(
                "checkout-message"
            ).innerText =
                "Order placed successfully!";


            checkoutForm.reset();


            // UPDATE SUMMARY

            displayCheckout();

        }

    );

}