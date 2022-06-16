// Book objects are going to be stored in an empty array.

let myPersonalLibrary = [];

const container = document.getElementById('container');
const statusButton = document.getElementById('status');

// Making a constructor 

function Book(title, author, genre, rating, status) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.rating = rating;
    this.status = false;
};

// getItem picks up the localStorage data, and since it's data from localStorage, the data type is string.

// Therefore, I have to convert the string into the object. JSON.parse will help me.


let localBooks = localStorage.getItem('Book');
let newLocal = JSON.parse(localBooks);


function getLocalStorage() {
    
    if ((typeof(localBooks) && typeof(myPersonalLibrary)) == null) {
        myPersonalLibrary = [];  
    } else {
        for (let i in newLocal) {
        myPersonalLibrary.push(newLocal[i]);
        localStorage.setItem('Book', JSON.stringify(myPersonalLibrary));
        }  
    }
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
    document.querySelector('form').reset();
};

function setLocal() {
    localBooks = localStorage.setItem('Book', JSON.stringify(myPersonalLibrary));
};

const submitButton = document.getElementById('submit-btn');


const submitData = () => {
    // e.preventDefault();
    const userTitle = document.getElementById('title').value;
    const userAuthor = document.getElementById('author').value;
    const userGenre = document.getElementById('genre').value;
    const userRating = document.getElementById('rating').value;
    const userStatus = document.getElementById('status').value;

    // Block if title/author/rating info is blank.

    // Newly added condition: If rating is out of range, alert pops.

    if (!(userTitle == "" || userAuthor == "" || userRating == "")) {
        if (Number(userRating) > 5 || Number(userRating) < 1) {
            alert('Rating has to be an integer between 1 to 5!');
        } else {
        addMyBookToLibrary(userTitle, userAuthor, userGenre, userRating, userStatus);
        setLocal();
        displayBooks();
        };
    };
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
        
        const parentTableRow = document.getElementById('book-table');
        
        const newBookInfo = document.createElement('tr');
        newBookInfo.className = 'book-data';
        newBookInfo.setAttribute('data-id', myPersonalLibrary.indexOf(book));
        
        parentTableRow.appendChild(newBookInfo);

        const newBookTitle = document.createElement('td');
        newBookTitle.className = 'new-book';
        newBookInfo.appendChild(newBookTitle);
        newBookTitle.innerText = book.title;

        const newBookAuthor = document.createElement('td');
        newBookAuthor.className = 'new-book';
        newBookInfo.appendChild(newBookAuthor);
        newBookAuthor.innerText = book.author;

        const newBookGenre = document.createElement('td');
        newBookGenre.className = 'new-book';
        newBookInfo.appendChild(newBookGenre);
        newBookGenre.innerText = book.genre;

        const newBookRating = document.createElement('td');
        newBookRating.className = 'new-book';
        newBookInfo.appendChild(newBookRating);
        newBookRating.innerText = book.rating;

        const newBookStatus = document.createElement('td');
        newBookStatus.className = 'new-book';
        newBookInfo.appendChild(newBookStatus);
        newBookStatus.innerText = book.status;


        const newCard = document.createElement('div');
        newCard.className = 'card-body';
        newCard.setAttribute('data-id', myPersonalLibrary.indexOf(book));

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
        newCard.appendChild(newCardRating);
        newCardRating.innerText = `Rating: ${book.rating}`;
        
        const newCardStatus = document.createElement('p');
        newCardStatus.className = 'card-header';
        newCard.appendChild(newCardStatus);
        newCardStatus.innerText = `Status: ${book.status}`;

        const newRemoveBtn = document.createElement('input');
        newRemoveBtn.setAttribute('value', "Delete Book?");
        newRemoveBtn.setAttribute('data-id', myPersonalLibrary.indexOf(book));
        newRemoveBtn.className = 'delete-btn';

        newCard.appendChild(newRemoveBtn);
        container.appendChild(newCard);

        const deleteButtons = document.querySelectorAll('input[data-id]');

        deleteButtons.forEach(btn => btn.addEventListener('click', deleteMe));       
    });
};


function deleteMe() {

    // Set index to be the id of the button.

    let idx = Number(this.dataset.id);

    console.log('1st new local', newLocal[idx]);
    console.log('1st myLib', myPersonalLibrary[idx]);
    
    this.parentElement.remove();

    newLocal.splice(idx, 1);
    myPersonalLibrary.splice(idx, 1);

    localStorage.setItem('Book', JSON.stringify(myPersonalLibrary));
};
