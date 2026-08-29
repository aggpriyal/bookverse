
// BOOKS


const books = [

    {
        id: 1,
        title: "The Alchemist",
        author: "Paulo Coelho",
        price: 299,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT35UTqe-I5Id6J2F1KdueIn1ExIX3nMiNYM1ZmXBI08g&s=10",
        genre: "non-fiction",
        language: "english"
    },

    {
        id: 2,
        title: "Atomic Habits",
        author: "James Clear",
        price: 399,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ARDuN7MBoD9cPjB3KNIoSKTbxOyaz137jWK5yVscaw&s=10",
        genre: "non-fiction",
        language: "english"
    },

    {
        id: 3,
        title: "Ikigai",
        author: "Hector Garcia",
        price: 249,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnVW7BcWY6tHpBdlO-tD4v3DL44CaIo6Ec-SxNLcL9QQ&s=10",
        genre: "non-fiction",
        language: "english"
    },

    {
        id: 4,
        title: "The Psychology of Money",
        author: "Morgan Housel",
        price: 349,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4e8GZDve-S3E7Z9MWbnBg6DxpIBHTSNmmSdMV6wip4g&s=10",
        genre: "non-fiction",
        language: "english"
    },

    {
        id: 5,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 279,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTryQtHdFYSlxwv4U2jB0TlQ-a55uLtqvpNLDcbwkmHGw&s=10",
        genre: "classic",
        language: "english"
    },

    {
        id: 6,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        price: 329,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTovy_OmGZIEdyamtmV1ZD8rmgitXGKqSQpwl2fVLIIdQ&s",
        genre: "romcom",
        language: "english"
    },

    {
    id: 7,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    price: 399,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJQJQJQJQJQ",
    genre: "thriller",
    language: "english"
},

{
    id: 8,
    title: "Verity",
    author: "Colleen Hoover",
    price: 399,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKQKQKQKQKQ",
    genre: "thriller",
    language: "english"
},

{
    id: 9,
    title: "Dune",
    author: "Frank Herbert",
    price: 449,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLQLQLQLQLQ",
    genre: "science-fiction",
    language: "english"
},

{
    id: 10,
    title: "Godaan",
    author: "Munshi Premchand",
    price: 249,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMQMQMQMQMQ",
    genre: "classic",
    language: "hindi"
},

{
    id: 11,
    title: "Pinjar",
    author: "Amrita Pritam",
    price: 299,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNQNQNQNQNQ",
    genre: "classic",
    language: "punjabi"
}

];

// GET USERS FROM LOCAL STORAGE
let users =
    JSON.parse(localStorage.getItem("users")) || [];

// GET CURRENT USER
let currentUser =
    JSON.parse(localStorage.getItem("currentUser"));

// GET CART FROM LOCAL STORAGE

let cart =
    JSON.parse(localStorage.getItem("cart")) || [];


// LOGIN POPUP

const loginButton =
    document.getElementById("login-button");

const loginPopup =
    document.getElementById("login-popup");

const closeLogin =
    document.getElementById("close-login");

if (loginButton) {

    loginButton.addEventListener("click", function() {

        loginPopup.style.display = "flex";

    });

}



if (closeLogin) {

    closeLogin.addEventListener("click", function() {

        loginPopup.style.display = "none";

    });

}

// SIGNUP POPUP


const signupPopup =
    document.getElementById("signup-popup");

const showSignup =
    document.getElementById("show-signup");

const closeSignup =
    document.getElementById("close-signup");



if (showSignup) {

    showSignup.addEventListener("click", function() {

        loginPopup.style.display = "none";

        signupPopup.style.display = "flex";

    });

}



if (closeSignup) {

    closeSignup.addEventListener("click", function() {

        signupPopup.style.display = "none";

    });

}

// GO BACK TO LOGIN


const showLogin =
    document.getElementById("show-login");



if (showLogin) {

    showLogin.addEventListener("click", function() {

        signupPopup.style.display = "none";

        loginPopup.style.display = "flex";

    });

}


// SIGN UP


const signupForm =
    document.getElementById("signup-form");



if (signupForm) {

    signupForm.addEventListener("submit", function(event) {

        event.preventDefault();


        const name =
            document.getElementById("signup-name").value;

        const email =
            document.getElementById("signup-email").value;

        const password =
            document.getElementById("signup-password").value;



        // Check if email already exists

        const userExists =
            users.find(function(user) {

                return user.email === email;

            });



        if (userExists) {

            document.getElementById(
                "signup-message"
            ).innerText =
                "This email is already registered.";

            return;

        }



        // Create a new user

        const newUser = {

            name: name,

            email: email,

            password: password

        };



        // Add user to array

        users.push(newUser);



        // Save users

        localStorage.setItem(
            "users",
            JSON.stringify(users)
        );



        document.getElementById(
            "signup-message"
        ).innerText =
            "Account created successfully!";



        signupForm.reset();

    });

}

// LOGIN


const loginForm =
    document.getElementById("login-form");



if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();


        const email =
            document.getElementById("login-email").value;

        const password =
            document.getElementById("login-password").value;



        // Find the user

        const user =
            users.find(function(user) {

                return user.email === email &&
                       user.password === password;

            });



        if (user) {

            // Save current user

            localStorage.setItem(
                "currentUser",
                JSON.stringify(user)
            );



            document.getElementById(
                "login-message"
            ).innerText =
                "Login successful!";



            setTimeout(function() {

                loginPopup.style.display = "none";

                window.location.reload();

            }, 500);

        }

        else {

            document.getElementById(
                "login-message"
            ).innerText =
                "Wrong email or password.";

        }

    });

}


// LOGOUT


function logout() {

    localStorage.removeItem("currentUser");

    window.location.reload();

}


// SHOW USER IN NAVBAR


const userArea =
    document.getElementById("user-area");



if (userArea) {

    if (currentUser) {

        userArea.innerHTML = `

            <span>
                Hi, ${currentUser.name}
            </span>

            <button onclick="logout()">
                Logout
            </button>

        `;



        if (loginButton) {

            loginButton.style.display = "none";

        }

    }

}

// DISPLAY BOOKS

const bookContainer =
    document.getElementById("book-container");



if (bookContainer) {

    books.forEach(function(book) {

        bookContainer.innerHTML += `

            <div class="book-card">

                <div class="book-cover">
                <img src="${book.image}" alt="${book.title}">
                </div>

                <h2>
                    ${book.title}
                </h2>

                <p>
                    ${book.author}
                </p>

                <h3>
                    ₹${book.price}
                </h3>

                <button
                    onclick="addToCart(${book.id})">

                    Add to Cart

                </button>

            </div>

        `;

    });

}


// ADD BOOK TO CART


function addToCart(id) {


    // Check login

    if (!currentUser) {

        alert("Please login first.");

        return;

    }



    // Find the book

    const book =
        books.find(function(book) {

            return book.id === id;

        });



    // Check if already in cart

    const existingBook =
        cart.find(function(item) {

            return item.id === id;

        });



    if (existingBook) {

        // Increase quantity

        existingBook.quantity++;

    }

    else {

        // Add new book

        cart.push({

            id: book.id,

            title: book.title,

            author: book.author,

            price: book.price,

            quantity: 1

        });

    }



    // Save cart

    saveCart();



    alert("Book added to cart!");

}


// SAVE CART


function saveCart() {

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

}

// DISPLAY CART


const cartItems =
    document.getElementById("cart-items");



if (cartItems) {

    displayCart();

}



function displayCart() {

    cartItems.innerHTML = "";



    // If cart is empty

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


        // Calculate total

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




// INCREASE QUANTITY


function increaseQuantity(id) {

    const book =
        cart.find(function(item) {

            return item.id === id;

        });



    book.quantity++;



    saveCart();

    displayCart();

}




// DECREASE QUANTITY


function decreaseQuantity(id) {

    const book =
        cart.find(function(item) {

            return item.id === id;

        });



    book.quantity--;



    if (book.quantity === 0) {

        removeFromCart(id);

        return;

    }



    saveCart();

    displayCart();

}




// REMOVE BOOK FROM CART


function removeFromCart(id) {

    cart =
        cart.filter(function(item) {

            return item.id !== id;

        });



    saveCart();

    displayCart();

}


// CLEAR CART


const clearCart =
    document.getElementById("clear-cart");



if (clearCart) {

    clearCart.addEventListener("click", function() {

        cart = [];

        saveCart();


        displayCart();

    });

}