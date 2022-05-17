// Book objects are going to be stored in an empty array.

let myPersonalLibrary = [];

// Making a constructor 

function Book(title, author, genre, rating) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.rating = rating;
    
};

let newbook = new addMyBookToLibrary("Harry Potter", "J.K. Rowlings", "Fiction", "5");
let newbook2 = new addMyBookToLibrary("Atomic Habits", "James Clear", "Non-Fiction", );
let newbook3 = new addMyBookToLibrary("Grit", "Angela Duckworth", "Non-Fiction", "5");
let newbook4 = new addMyBookToLibrary("The Alchemist", "Paulo Coelho", "Fiction", "5");
let newbook5 = new addMyBookToLibrary("Homo Deus", "Yuval Noah Harari", "Non-Fiction", "5");
let newbook6 = new addMyBookToLibrary("1Q84", "Haruki Murakami", "Fiction", "5");
let newbook7 = new addMyBookToLibrary("Man's Search for Meaning", "Viktor Frankl", "Non-Fiction", "5");
let newbook8 = new addMyBookToLibrary("Moonwalking with Einstein", "Joshua Foer", "Non-Fiction", "5");
const container = document.getElementById('container');

// Making a function to add a new book to the library(array)

function addMyBookToLibrary(title) {
    __proto__: Book,
    myPersonalLibrary.push(title);
};

function displayBooks() {
    myPersonalLibrary.forEach(book => {
        const newCard = document.createElement('div');
        newCard.className = 'card-body';
        newCard.innerText = book; // Not sure if this is working.
        container.append(newCard);
        console.log(newCard);
    });
};

displayBooks();