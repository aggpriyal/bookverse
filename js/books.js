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
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ73A0NYridKjK30eNm8ZoWH4ZW_IhswUBdaCuQkMRsHw&s=10",
        genre: "thriller",
        language: "english"
    },

    {
        id: 8,
        title: "Gone Girl",
        author: "Gillian Flynn",
        price: 449,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT29EXxo0o7ovs7IFsxps2KcLkAmBKIYxXxynNQluagKw&s=10",
        genre: "thriller",
        language: "english"
    },

    {
        id: 9,
        title: "The Da Vinci Code",
        author: "Dan Brown",
        price: 399,
        image: "YOUR IMAGE URL",
        genre: "thriller",
        language: "english"
    },

    {
        id: 10,
        title: "Dune",
        author: "Frank Herbert",
        price: 499,
        image: "YOUR IMAGE URL",
        genre: "science-fiction",
        language: "english"
    },

    {
        id: 11,
        title: "Project Hail Mary",
        author: "Andy Weir",
        price: 449,
        image: "YOUR IMAGE URL",
        genre: "science-fiction",
        language: "english"
    },

    {
        id: 12,
        title: "The Fault in Our Stars",
        author: "John Green",
        price: 299,
        image: "YOUR IMAGE URL",
        genre: "romcom",
        language: "english"
    },

    {
        id: 13,
        title: "Me Before You",
        author: "Jojo Moyes",
        price: 349,
        image: "YOUR IMAGE URL",
        genre: "romcom",
        language: "english"
    },

    {
        id: 14,
        title: "The 7 Habits of Highly Effective People",
        author: "Stephen R. Covey",
        price: 499,
        image: "YOUR IMAGE URL",
        genre: "non-fiction",
        language: "english"
    },

    {
        id: 15,
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        price: 349,
        image: "YOUR IMAGE URL",
        genre: "non-fiction",
        language: "english"
    },

    {
        id: 16,
        title: "Sapiens",
        author: "Yuval Noah Harari",
        price: 499,
        image: "YOUR IMAGE URL",
        genre: "non-fiction",
        language: "english"
    },

    {
        id: 17,
        title: "Godaan",
        author: "Munshi Premchand",
        price: 249,
        image: "YOUR IMAGE URL",
        genre: "classic",
        language: "hindi"
    },

    {
        id: 18,
        title: "Raag Darbari",
        author: "Shri Lal Shukla",
        price: 299,
        image: "YOUR IMAGE URL",
        genre: "classic",
        language: "hindi"
    },

    {
        id: 19,
        title: "Pinjar",
        author: "Amrita Pritam",
        price: 299,
        image: "YOUR IMAGE URL",
        genre: "classic",
        language: "punjabi"
    },

    {
        id: 20,
        title: "Madame Bovary",
        author: "Gustave Flaubert",
        price: 329,
        image: "YOUR IMAGE URL",
        genre: "classic",
        language: "french"
    }

];



function displayBooks(bookList) {

    const bookContainer =
        document.getElementById("book-container");


    if (!bookContainer) {
        return;
    }


    bookContainer.innerHTML = "";


    bookList.forEach(function(book) {

        bookContainer.innerHTML += `

            <div class="book-card">

                <div class="book-cover">

                    <img
                        src="${book.image}"
                        alt="${book.title}"
                    >

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




if (document.getElementById("book-container")) {

    displayBooks(books);

}



function addToCart(id) {

    // Check login

    if (!currentUser) {

        alert("Please login first.");

        return;

    }


    // Find book

    const book =
        books.find(function(book) {

            return book.id === id;

        });



    const existingBook =
        cart.find(function(item) {

            return item.id === id;

        });


    if (existingBook) {

        existingBook.quantity++;

    }

    else {

        cart.push({

            id: book.id,

            title: book.title,

            author: book.author,

            price: book.price,

            quantity: 1

        });

    }


    saveCart();


    alert("Book added to cart!");

}


const genreButton =
    document.getElementById("genre-button");

const languageButton =
    document.getElementById("language-button");



const genreDropdown =
    document.getElementById("genre-dropdown");

const languageDropdown =
    document.getElementById("language-dropdown");


if (genreButton) {

    genreButton.addEventListener("click", function() {

        genreDropdown.classList.toggle("show");

        languageDropdown.classList.remove("show");

    });

}



if (languageButton) {

    languageButton.addEventListener("click", function() {

        languageDropdown.classList.toggle("show");

        genreDropdown.classList.remove("show");

    });

}


document.addEventListener("click", function(event) {

    if (
        !event.target.closest(".genre-menu") &&
        !event.target.closest(".language-menu")
    ) {

        if (genreDropdown) {

            genreDropdown.classList.remove("show");

        }

        if (languageDropdown) {

            languageDropdown.classList.remove("show");

        }

    }

});


const params =
    new URLSearchParams(window.location.search);

const selectedGenre =
    params.get("genre");

const selectedLanguage =
    params.get("language");


if (selectedGenre || selectedLanguage) {

    const bookContainer =
        document.getElementById("book-container");


    if (bookContainer) {

        let filteredBooks = books;

        if (selectedGenre) {

            filteredBooks =
                books.filter(function(book) {

                    return book.genre === selectedGenre;

                });

        }

        if (selectedLanguage) {

            filteredBooks =
                books.filter(function(book) {

                    return book.language === selectedLanguage;

                });

        }

        bookContainer.innerHTML = "";

        filteredBooks.forEach(function(book) {

            bookContainer.innerHTML += `

                <div class="book-card">

                    <div class="book-cover">

                        <img
                            src="${book.image}"
                            alt="${book.title}"
                        >

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


        if (filteredBooks.length === 0) {

            bookContainer.innerHTML = `

                <p class="no-books">
                    No books found in this category.
                </p>

            `;

        }

    }

}