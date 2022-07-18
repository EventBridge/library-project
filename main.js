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

function addBookToLibrary() {
    console.log("Added Book");
}

const table = document.querySelector(".table");

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

    card.append(titleDiv);
    card.append(authorDiv);
    card.append(pageDiv);
    card.append(readDiv);

    table.append(card);
}

function displayCards() {
    myLibrary.forEach((item) => {
        createCard(item);
    });
}

displayCards();
