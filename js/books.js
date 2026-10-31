let books = [];


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
                    onclick="addToCart('${book.id}')">

                    Add to Cart

                </button>

            </div>

        `;

    });

}




// if (document.getElementById("book-container")) {

//     displayBooks(books);

// }




function addToCart(id) {
    // Check login
    if (!currentUser) {
        alert("Please login first.");
        return;
    }

    // Find book
    const book = books.find(function(book) {
        return String(book.id) === String(id);
    });

    // Stop if book is not found
    if (!book) {
        alert("Book not found. Please refresh the page.");
        return;
    }

    // Check if book is already in cart
    const existingBook = cart.find(function(item) {
        return String(item.id) === String(id);
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
        !event.target.closest(".genre-menu") && !event.target.closest(".language-menu")
    ) {

        if (genreDropdown) {

            genreDropdown.classList.remove("show");

        }

        if (languageDropdown) {

            languageDropdown.classList.remove("show");

        }

    }

});

async function loadBooks() {
    const bookContainer = document.getElementById("book-container");

    if (!bookContainer) {
        return;
    }

    try {
        const response = await fetch("http://localhost:3000/api/books");

        if (!response.ok) {
            throw new Error("Could not fetch books");
        }

        const data = await response.json();

        // Convert MongoDB IDs into the IDs used by the website
        books = data.map(function(book) {
            return {
                ...book,
                id: book._id
            };
        });

        const params = new URLSearchParams(window.location.search);
        const selectedGenre = params.get("genre");
        const selectedLanguage = params.get("language");

        let filteredBooks = books;

        if (selectedGenre) {
            filteredBooks = filteredBooks.filter(function(book) {
                return book.genre === selectedGenre;
            });
        }

        if (selectedLanguage) {
            filteredBooks = filteredBooks.filter(function(book) {
                return book.language === selectedLanguage;
            });
        }

        displayBooks(filteredBooks);

        if (filteredBooks.length === 0) {
            bookContainer.innerHTML =
                '<p class="no-books">No books found in this category.</p>';
        }

    } catch (error) {
        console.error("Error loading books:", error);

        bookContainer.innerHTML =
            "<p>Unable to load books. Please try again.</p>";
    }
}

loadBooks();
