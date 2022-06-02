// Book objects are going to be stored in an empty array.

let myPersonalLibrary = [];


// Adding books manually to see whether it's displayed correctly.

const container = document.getElementById('container');
const statusButton = document.getElementById('status');
// const newBook1 = new addMyBookToLibrary("Harry Potter and the Philosopher's Stone", "J.K. Rowlings", "Fiction", "5");
// const newBook2 = new addMyBookToLibrary("Atomic Habits", "James Clear", "Non-Fiction", "5");
// const newBook3 = new addMyBookToLibrary("Grit", "Angela Duckworth", "Non-Fiction", "5");
// const newBook4 = new addMyBookToLibrary("The Alchemist", "Paulo Coelho", "Fiction", "5");
// const newBook5 = new addMyBookToLibrary("Homo Deus", "Yuval Noah Harari", "Non-Fiction", "5");
// const newBook6 = new addMyBookToLibrary("1Q84", "Haruki Murakami", "Fiction", "5");
// const newBook7 = new addMyBookToLibrary("Man's Search for Meaning", "Viktor Frankl", "Non-Fiction", "5");
// const newBook8 = new addMyBookToLibrary("Moonwalking with Einstein", "Joshua Foer", "Non-Fiction", "5");



// Making a constructor 

function Book(title, author, genre, rating, status) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.rating = rating;
    this.status = false;
};

// New fucntion that checks whether myPersonalLibrary matches the localStorage.
// If not, then updates the original array with localStorage data.

let localBooks = localStorage.getItem("Books");
let newLocal = JSON.parse(localBooks);


function getLocalStorage() {
    

    if (localBooks && myPersonalLibrary == null) {
        myPersonalLibrary = [];  
    } else {
        for(let i in newLocal) {
            myPersonalLibrary.push(newLocal[i]);
        }
    }
        
    console.log(`This is myPerLib: ${JSON.stringify(myPersonalLibrary)}`);
    console.log(`This is the localStorage: ${JSON.stringify(newLocal)}`);
    displayBooks();
}

getLocalStorage()

function addMyBookToLibrary(title, author, genre, rating, status) {
    const book = new Book(title, author, genre, rating, status);
    
    // Confirm whether the status button is checked, if so, status will be true.

    if (statusButton.checked == true) {
        book.status = "Finished Reading!";
    } else {
        book.status = "Still Reading.";
    }
    myPersonalLibrary.push(book);
    localStorage.setItem('Books', JSON.stringify(myPersonalLibrary));
    document.querySelector('form').reset();
};



const submitButton = document.getElementById('submit-btn');


const submitData = e => {
    // e.preventDefault();
    const userTitle = document.getElementById('title').value;
    const userAuthor = document.getElementById('author').value;
    const userGenre = document.getElementById('genre').value;
    const userRating = document.getElementById('rating').value;
    const userStatus = document.getElementById('status').value;

    // Block if title/author/rating info is blank.

    if (!(userTitle == "" || userAuthor == "" || userRating == "")) {
        addMyBookToLibrary(userTitle, userAuthor, userGenre, userRating, userStatus);
    }
    console.log(`This is myPerLib: ${JSON.stringify(myPersonalLibrary)}`);
    console.log(`This is the localStorage: ${JSON.stringify(newLocal)}`);
    displayBooks();
};

const deleteButtons = document.querySelectorAll('.delete-btn');

submitButton.addEventListener('click', submitData);


deleteButtons.forEach(btn => {
    btn.addEventListener('click', deleteMe);
})

function deleteMe() {
    localStorage.setItem('Books', JSON.stringify(myPersonalLibrary));
    console.log(`This is myPerLib: ${JSON.stringify(myPersonalLibrary)}`);
    console.log(`This is the localStorage: ${JSON.stringify(newLocal)}`);
    console.log(`this is this.parentElement: ${this.parentElement.outerHTML}`);
    this.parentElement.remove();
    console.log(`This is myPerLib: ${JSON.stringify(myPersonalLibrary)}`);
    console.log(`This is the localStorage: ${JSON.stringify(newLocal)}`);

    // function clearLocalStorage() {
    //     console.log($(this.parentElement.outerHTML).attr("id") == $(this.input).attr("id"));
    //     if ($(this.parentElement.outerHTML).attr("id") == $(this.input).attr("id")) {
    //         localStorage.removeItem()
    //     }
    // }
    
    // clearLocalStorage();
    
}




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
        newCard.setAttribute('id', myPersonalLibrary.indexOf(book));
        console.log(newCard);

        const newCardTitle = document.createElement('p');
        newCardTitle.className = 'card-header';
        newCard.appendChild(newCardTitle);
        newCardTitle.innerText = `Title: ${book.title}`;

        const newCardAuthor = document.createElement('p');
        newCardAuthor.className = 'card-header';
        newCard.appendChild(newCardAuthor);
        newCardAuthor.innerText = `Author: ${book.author}`;

        const newCardGenre = document.createElement('p');
        newCardGenre.className = 'card-header';
        newCard.appendChild(newCardGenre);
        newCardGenre.innerText = `Genre: ${book.genre}`;
        
        const newCardRating = document.createElement('p');
        newCardRating.className = 'card-header';
        newCard.appendChild(newCardRating)
        newCardRating.innerText = `Rating: ${book.rating}`;
        
        const newCardStatus = document.createElement('p');
        newCardStatus.className = 'card-header';
        newCard.appendChild(newCardStatus)
        newCardStatus.innerText = `Status: ${book.status}`;

        const newRemoveBtn = document.createElement('input');
        newRemoveBtn.setAttribute('value', "Delete Book?");
        newRemoveBtn.className = 'delete-btn';
        newRemoveBtn.setAttribute('id', myPersonalLibrary.indexOf(book));
        newCard.appendChild(newRemoveBtn);

        container.appendChild(newCard);
       
    });
};


