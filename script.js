const books = [
    {
        id: 1,
        title: "The Alchemist",
        author: "Paulo Coelho",
        price: 299,
        emoji: "📘"
    },

    {
        id: 2,
        title: "Atomic Habits",
        author: "James Clear",
        price: 399,
        emoji: "📗"
    },

    {
        id: 3,
        title: "Ikigai",
        author: "Hector Garcia",
        price: 249,
        emoji: "📙"
    },

    {
        id: 4,
        title: "The Psychology of Money",
        author: "Morgan Housel",
        price: 349,
        emoji: "📕"
    }
];


let cart = JSON.parse(localStorage.getItem("cart")) || [];


const bookContainer = document.getElementById("book-container");


function displayBooks() {

    bookContainer.innerHTML = "";

    books.forEach(function(book) {

        bookContainer.innerHTML += `

            <div class="book-card">

                <div class="book-cover">
                    ${book.emoji}
                </div>

                <h3>
                    ${book.title}
                </h3>

                <p>
                    ${book.author}
                </p>

                <p class="price">
                    ₹${book.price}
                </p>

                <button
                    class="add-btn"
                    onclick="addToCart(${book.id})">

                    Add to Cart

                </button>

            </div>

        `;
    });
}


function addToCart(id) {

    let book = books.find(function(book) {

        return book.id === id;

    });


    let existingBook = cart.find(function(item) {

        return item.id === id;

    });


    if (existingBook) {

        existingBook.quantity++;

    } else {

        cart.push({

            id: book.id,

            title: book.title,

            author: book.author,

            price: book.price,

            quantity: 1

        });
    }


    saveCart();

    displayCart();
}


function displayCart() {

    const cartItems = document.getElementById("cart-items");

    const totalElement = document.getElementById("cart-total");

    const countElement = document.getElementById("cart-count");


    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p>Your cart is empty.</p>
        `;

        totalElement.innerText = 0;

        countElement.innerText = 0;

        return;
    }


    let total = 0;

    let count = 0;


    cart.forEach(function(item) {

        total += item.price * item.quantity;

        count += item.quantity;


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
                        ₹${item.price} × ${item.quantity}
                    </p>

                </div>


                <div class="quantity">

                    <button
                        onclick="decreaseQuantity(${item.id})">

                        -

                    </button>


                    <span>
                        ${item.quantity}
                    </span>


                    <button
                        onclick="increaseQuantity(${item.id})">

                        +

                    </button>


                    <button
                        class="remove-btn"
                        onclick="removeFromCart(${item.id})">

                        Remove

                    </button>

                </div>

            </div>

        `;
    });


    totalElement.innerText = total;

    countElement.innerText = count;
}


function increaseQuantity(id) {

    let book = cart.find(function(item) {

        return item.id === id;

    });


    book.quantity++;

    saveCart();

    displayCart();
}


function decreaseQuantity(id) {

    let book = cart.find(function(item) {

        return item.id === id;

    });


    book.quantity--;


    if (book.quantity === 0) {

        cart = cart.filter(function(item) {

            return item.id !== id;

        });
    }


    saveCart();

    displayCart();
}


function removeFromCart(id) {

    cart = cart.filter(function(item) {

        return item.id !== id;

    });


    saveCart();

    displayCart();
}


function saveCart() {

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );
}


document.getElementById("clear-cart").addEventListener(
    "click",
    function() {

        cart = [];

        saveCart();

        displayCart();

    }
);


displayBooks();

displayCart();