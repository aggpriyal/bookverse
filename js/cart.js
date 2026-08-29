const cartItems =
    document.getElementById("cart-items");


if (cartItems) {

    displayCart();

}


function displayCart() {

    cartItems.innerHTML = "";


    // Check if cart is empty

    if (cart.length === 0) {

        cartItems.innerHTML =
            "<p>Your cart is empty.</p>";


        document.getElementById(
            "cart-total"
        ).innerText = 0;

        return;

    }


    let total = 0;


    cart.forEach(function(item) {
        total =
            total +
            item.price * item.quantity;


        cartItems.innerHTML += `

            <div class="cart-item">

                <div>

                    <h3>
                        ${item.title}
                    </h3>

                    <p>
                        ${item.author}
                    </p>

                    <p>
                        ₹${item.price}
                        ×
                        ${item.quantity}
                    </p>

                </div>


                <div>

                    <button
                        onclick="decreaseQuantity(${item.id})">

                        -

                    </button>
                    ${item.quantity}
                    <button
                        onclick="increaseQuantity(${item.id})">

                        +

                    </button>
                    <button
                        onclick="removeFromCart(${item.id})">

                        Remove

                    </button>

                </div>

            </div>

        `;

    });


    document.getElementById(
        "cart-total"
    ).innerText = total;

}


function increaseQuantity(id) {

    const book =
        cart.find(function(item) {

            return item.id === id;

        });


    if (!book) {
        return;
    }


    book.quantity++;


    saveCart();

    displayCart();

}




function decreaseQuantity(id) {

    const book =
        cart.find(function(item) {

            return item.id === id;

        });


    if (!book) {
        return;
    }


    book.quantity--;


    if (book.quantity === 0) {

        removeFromCart(id);

        return;

    }


    saveCart();

    displayCart();

}



function removeFromCart(id) {

    cart =
        cart.filter(function(item) {

            return item.id !== id;

        });


    saveCart();

    displayCart();

}



const clearCart =
    document.getElementById("clear-cart");


if (clearCart) {

    clearCart.addEventListener("click", function() {

        cart = [];


        saveCart();


        displayCart();

    });

}