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

// Making a function to add a new book to the library(array)

function addMyBookToLibrary(title, author, genre, rating) {
    const book = new Book(title, author, genre, rating);
    myPersonalLibrary.push(book);
};

// Created an addEventListener to retrieve the user input from the input form and create
// a new object.


// <Issue>

// Succeeded in creating a new object when I add preventDefault, however, it doesn't work
// without adding the the preventDefault.

// I just want to create an object that doesn't disappear. Need further researching.



const submitButton = document.getElementById('submit-btn')

submitButton.addEventListener('click', e => {
    e.preventDefault();
    const userTitle = document.getElementById('title').value;
    const userAuthor = document.getElementById('author').value;
    const userGenre = document.getElementById('genre').value;
    const userRating = document.getElementById('rating').value;

    new addMyBookToLibrary(userTitle, userAuthor, userGenre, userRating);
    // myPersonalLibrary.push(userTitle, userAuthor, userGenre, userRating);

    console.log(`This is mylib : ${myPersonalLibrary}`);
});




// Making a function to display books in the webpage, loop through the array,
// get the titles, making divs to store them, appended those divs to the parent div #container

function displayBooks() {
    myPersonalLibrary.forEach((book) => {
        const newCard = document.createElement('div');
        newCard.className = 'card-body';
        console.log(newCard)

        const content = `
            <div class="card-body">
                <span>Title: ${book.title}</p>
                <span>Author: ${book.author}</p>
                <span>Genre: ${book.genre}</p>
                <span>Rating: ${book.rating}</p>
            </div>
        `

        container.innerHTML += content;
        console.log(newCard);
    });
};

displayBooks();

// const userTitle = document.getElementById('title').value;
// const userAuthor = document.getElementById('author').value;
// const userGenre = document.getElementById('genre').value;
// const userRating = document.getElementById('rating').value;


