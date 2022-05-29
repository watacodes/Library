// Book objects are going to be stored in an empty array.

let myPersonalLibrary = [];


// Adding books manually to see whether it's displayed correctly.

const container = document.getElementById('container');
// const newBook1 = new addMyBookToLibrary("Harry Potter and the Philosopher's Stone", "J.K. Rowlings", "Fiction", "5");
// const newBook2 = new addMyBookToLibrary("Atomic Habits", "James Clear", "Non-Fiction", "5");
// const newBook3 = new addMyBookToLibrary("Grit", "Angela Duckworth", "Non-Fiction", "5");
// const newBook4 = new addMyBookToLibrary("The Alchemist", "Paulo Coelho", "Fiction", "5");
// const newBook5 = new addMyBookToLibrary("Homo Deus", "Yuval Noah Harari", "Non-Fiction", "5");
// const newBook6 = new addMyBookToLibrary("1Q84", "Haruki Murakami", "Fiction", "5");
// const newBook7 = new addMyBookToLibrary("Man's Search for Meaning", "Viktor Frankl", "Non-Fiction", "5");
// const newBook8 = new addMyBookToLibrary("Moonwalking with Einstein", "Joshua Foer", "Non-Fiction", "5");



// Making a constructor 

function Book(title, author, genre, rating) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.rating = rating;
};

// New fucntion that checks whether myPersonalLibrary matches the localStorage.
// If not, then updates the original array with localStorage data.



function getLocalStorage() {
    let localBooks = localStorage.getItem("Books");
    if (localBooks == null) {
        myPersonalLibrary = [];  
    } else {
        myPersonalLibrary = JSON.parse(localBooks);
    }
    displayBooks();
}

getLocalStorage()

function addMyBookToLibrary(title, author, genre, rating) {
    const book = new Book(title, author, genre, rating);
    myPersonalLibrary.push(book);
    localStorage.setItem('Books', JSON.stringify(myPersonalLibrary));
    document.querySelector('form').reset();
};



const submitButton = document.getElementById('submit-btn');

const submitData = e => {
    e.preventDefault();
    const userTitle = document.getElementById('title').value;
    const userAuthor = document.getElementById('author').value;
    const userGenre = document.getElementById('genre').value;
    const userRating = document.getElementById('rating').value;

    // Block if title/author/rating info is blank.

    if (!(userTitle == "" || userAuthor == "" || userRating == "")) {
        addMyBookToLibrary(userTitle, userAuthor, userGenre, userRating);
    }
    displayBooks();
};


submitButton.addEventListener('click', submitData);





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
                <p><div class="card-header">Title: </div>${book.title}</p>
                <p><div class="card-header">Author: </div>${book.author}</p>
                <p><div class="card-header">Genre: </div>${book.genre}</p>
                <p><div class="card-header">Rating: </div>${book.rating}</p>
            </div>
        `

        container.innerHTML += content;
    });
};


