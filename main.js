// Book objects are going to be stored in an empty array.

let myPersonalLibrary = [];

// Adding books manually to see whether it's displayed correctly.

// const newBook1 = new addMyBookToLibrary("Harry Potter", "J.K. Rowlings", "Fiction", "5");
// const newBook2 = new addMyBookToLibrary("Atomic Habits", "James Clear", "Non-Fiction", "5");
// const newBook3 = new addMyBookToLibrary("Grit", "Angela Duckworth", "Non-Fiction", "5");
// const newBook4 = new addMyBookToLibrary("The Alchemist", "Paulo Coelho", "Fiction", "5");
// const newBook5 = new addMyBookToLibrary("Homo Deus", "Yuval Noah Harari", "Non-Fiction", "5");
// const newBook6 = new addMyBookToLibrary("1Q84", "Haruki Murakami", "Fiction", "5");
// const newBook7 = new addMyBookToLibrary("Man's Search for Meaning", "Viktor Frankl", "Non-Fiction", "5");
// const newBook8 = new addMyBookToLibrary("Moonwalking with Einstein", "Joshua Foer", "Non-Fiction", "5");

const container = document.getElementById('container');

// Making a constructor 

function Book(title, author, genre, rating) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.rating = rating;
};

function addMyBookToLibrary(title, author, genre, rating) {
    const book = new Book(title, author, genre, rating);
    myPersonalLibrary.push(book);
    localStorage.setItem('Books', JSON.stringify(myPersonalLibrary));
    displayBooks();
    document.querySelector('form').reset();
};

const submitButton = document.getElementById('submit-btn');

submitButton.addEventListener('click', e => {
    e.preventDefault();
    const userTitle = document.getElementById('title').value;
    const userAuthor = document.getElementById('author').value;
    const userGenre = document.getElementById('genre').value;
    const userRating = document.getElementById('rating').value;

    // Block if title/author/rating info is blank.

    if (!(userTitle == "" || userAuthor == "" || userRating == "")) {
        new addMyBookToLibrary(userTitle, userAuthor, userGenre, userRating);
    }
});



// Making a function to display books in the webpage, loop through the array,
// get the book info, make div elements to store them, append those divs to the parent div #container

function displayBooks() {
    // delete the existing cards

    const existingCard = document.querySelectorAll('.card-body');

    for (let i = 0; i < existingCard.length; i++) {
        existingCard[i].remove();
    }

    myPersonalLibrary.forEach((book) => {
        
        const newCard = document.createElement('div');
        newCard.className = 'card-body';

        const content = `
            <div class="card-body">
                <p>Title: <br> ${book.title}</p>
                <p>Author: <br> ${book.author}</p>
                <p>Genre: <br> ${book.genre}</p>
                <p>Rating: <br> ${book.rating}</p>
            </div>
        `

        container.innerHTML += content;
    });
};

// New fucntion that checks whether myPersonalLibrary matches the localStorage.
// If not, then updates the original array with localStorage data.

function getLocalStorage() {
    if (myPersonalLibrary != localStorage.getItem('Books')) {
        myPersonalLibrary = JSON.parse(localStorage.getItem('Books'));
        displayBooks()
    }
}

getLocalStorage()



