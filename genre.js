// =========================
// BOOK FILTER MENU
// =========================


// GET BUTTONS

const genreButton =
    document.getElementById("genre-button");

const languageButton =
    document.getElementById("language-button");


// GET DROPDOWNS

const genreDropdown =
    document.getElementById("genre-dropdown");

const languageDropdown =
    document.getElementById("language-dropdown");


// =========================
// GENRE BUTTON
// =========================

if (genreButton) {

    genreButton.addEventListener("click", function() {

        genreDropdown.classList.toggle("show");

        languageDropdown.classList.remove("show");

    });

}


// =========================
// LANGUAGE BUTTON
// =========================

if (languageButton) {

    languageButton.addEventListener("click", function() {

        languageDropdown.classList.toggle("show");

        genreDropdown.classList.remove("show");

    });

}


// =========================
// CLOSE DROPDOWNS
// =========================

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


// =========================
// GET SELECTED FILTER
// =========================

const params =
    new URLSearchParams(window.location.search);

const selectedGenre =
    params.get("genre");

const selectedLanguage =
    params.get("language");


// =========================
// FILTER BOOKS
// =========================

if (selectedGenre || selectedLanguage) {

    const bookContainer =
        document.getElementById("book-container");


    if (bookContainer) {

        let filteredBooks = books;


        // GENRE FILTER

        if (selectedGenre) {

            filteredBooks =
                books.filter(function(book) {

                    return book.genre === selectedGenre;

                });

        }


        // LANGUAGE FILTER

        if (selectedLanguage) {

            filteredBooks =
                books.filter(function(book) {

                    return book.language === selectedLanguage;

                });

        }


        // REMOVE OLD BOOKS

        bookContainer.innerHTML = "";


        // DISPLAY FILTERED BOOKS

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


        // NO BOOKS MESSAGE

        if (filteredBooks.length === 0) {

            bookContainer.innerHTML = `

                <p class="no-books">
                    No books found in this category.
                </p>

            `;

        }

    }

}