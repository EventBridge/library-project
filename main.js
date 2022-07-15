let myLibrary = [];

function Book(title, author, numOfPages, read) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.read = read;
}

function addBookToLibrary() {
    // do stuff here
}

myLibrary.push(new Book("Mister Man", "John Smith", "295", "not read"));

const table = document.querySelector(".table");

function createCard(title, author, numOfPages, read) {
    const card = document.createElement("div");
    card.className = "card";

    const titleDiv = document.createElement("div");
    titleDiv.textContent = title;
    const authorDiv = document.createElement("div");
    authorDiv.textContent = author;
    const pageDiv = document.createElement("div");
    pageDiv.textContent = numOfPages;
    const readDiv = document.createElement("div");
    readDiv.textContent = read;

    card.append(titleDiv);
    card.append(authorDiv);
    card.append(pageDiv);
    card.append(readDiv);

    table.append(card);
}

createCard("Merry Christmas", "John Smith", "295", "not read");
createCard("Bruh Moment", "Michael Jackson", "1", "not read");
