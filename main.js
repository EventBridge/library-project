let myLibrary = [];

// Placeholder data
myLibrary.push(new Book("Mister Man", "John Smith", "295", "not read"));
myLibrary.push(new Book("Dog Boy", "Jane Smith", "10", "read"));

function Book(title, author, numOfPages, read) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.read = read;
}

const table = document.querySelector(".table");

const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const numOfPagesInput = document.querySelector("#numOfPages");
const readInput = document.querySelector("#read");

function addBookToLibrary() {
    table.innerHTML = "";
    console.log("Added Book");
    let hasRead;
    if (readInput.checked) {
        hasRead = "read";
    } else {
        hasRead = "not read";
    }
    myLibrary.push(
        new Book(
            titleInput.value,
            authorInput.value,
            numOfPagesInput.value,
            hasRead
        )
    );
    displayCards();
}

let currentIndex;

function createCard(item) {
    const card = document.createElement("div");
    card.className = "card";

    const titleDiv = document.createElement("div");
    titleDiv.textContent = item.title;
    const authorDiv = document.createElement("div");
    authorDiv.textContent = item.author;
    const pageDiv = document.createElement("div");
    pageDiv.textContent = item.numOfPages;
    const readDiv = document.createElement("div");
    readDiv.textContent = item.read;

    card.dataset.index = currentIndex;
    const indexDiv = document.createElement("div");
    indexDiv.textContent = card.dataset.index;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = function () {
        myLibrary.splice(this.dataset.index, 1);
        card.remove();
    };

    card.append(titleDiv);
    card.append(authorDiv);
    card.append(pageDiv);
    card.append(readDiv);
    card.append(indexDiv);
    card.append(removeButton);

    table.append(card);
}

function displayCards() {
    currentIndex = 0;
    myLibrary.forEach((item) => {
        createCard(item);
        currentIndex++;
    });
}

displayCards();
