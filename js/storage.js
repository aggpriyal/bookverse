// let users =
//     JSON.parse(localStorage.getItem("users")) || [];

let currentUser =
    JSON.parse(localStorage.getItem("currentUser"));

let cart = [];

function loadCart() {
    if (currentUser) {
        cart = JSON.parse(
            localStorage.getItem(
                "cart_" + currentUser.email
            )
        ) || [];
    } else {
        cart = [];
    }
}

function saveCart() {
    if (!currentUser) {
        return;
    }

    localStorage.setItem(
        "cart_" + currentUser.email,
        JSON.stringify(cart)
    );
}

loadCart();
