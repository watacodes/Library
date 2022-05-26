// Book objects are going to be stored in an empty array.

let myPersonalLibrary = [];

// Making a constructor 

function Book(title, author, genre, rating) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.rating = rating;
};

const newBook1 = new addMyBookToLibrary("Harry Potter", "J.K. Rowlings", "Fiction", "5");
const newBook2 = new addMyBookToLibrary("Atomic Habits", "James Clear", "Non-Fiction", "5");
const newBook3 = new addMyBookToLibrary("Grit", "Angela Duckworth", "Non-Fiction", "5");
const newBook4 = new addMyBookToLibrary("The Alchemist", "Paulo Coelho", "Fiction", "5");
const newBook5 = new addMyBookToLibrary("Homo Deus", "Yuval Noah Harari", "Non-Fiction", "5");
const newBook6 = new addMyBookToLibrary("1Q84", "Haruki Murakami", "Fiction", "5");
const newBook7 = new addMyBookToLibrary("Man's Search for Meaning", "Viktor Frankl", "Non-Fiction", "5");
const newBook8 = new addMyBookToLibrary("Moonwalking with Einstein", "Joshua Foer", "Non-Fiction", "5");
const container = document.getElementById('container');

function addMyBookToLibrary(title, author, genre, rating) {
    const book = new Book(title, author, genre, rating);
    myPersonalLibrary.push(book);
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
        console.log(`This is mylib : ${JSON.stringify(myPersonalLibrary)}`);
        displayBooksAddedByUser();
    }
});



// Making a function to display books in the webpage, loop through the array,
// get the book info, making divs to store them, appended those divs to the parent div #container

function displayBooks() {
    myPersonalLibrary.forEach((book) => {
        
        localStorage.setItem('Book', JSON.stringify(myPersonalLibrary));
        
        const newCard = document.createElement('div');
        newCard.className = 'card-body';

        const content = `
            <div class="card-body">
                <span>Title: ${book.title}</p>
                <span>Author: ${book.author}</p>
                <span>Genre: ${book.genre}</p>
                <span>Rating: ${book.rating}</p>
            </div>
        `

        container.innerHTML += content;
    });
};

displayBooks();

// Newly added function that adds new book data based on user input

// Issue

// Can't store the info in the localStorage, created divs will be disappears
// once I reload the page.

function displayBooksAddedByUser() {
    const lastItem = myPersonalLibrary[myPersonalLibrary.length - 1];
    localStorage.setItem('Book', JSON.stringify(myPersonalLibrary));
    console.log(myPersonalLibrary);
    const createNewCard = document.createElement('div');
    createNewCard.className = 'card-body';

    const newCardBody = `
        <div class="card-body">
            <span>Title: ${lastItem.title}</p>
            <span>Author: ${lastItem.author}</p>
            <span>Genre: ${lastItem.genre}</p>
            <span>Rating: ${lastItem.rating}</p>
        </div>
    `

    container.innerHTML += newCardBody;
}



