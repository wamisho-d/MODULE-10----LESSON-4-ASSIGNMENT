// Task 1: Constructor function for Book object
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

// Task 2: Method to display book information
Book.prototype.getInfo = function () {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`;
};

// Task 3: Array to store book objects and functions to manage the library
const library = [];

// Function to add a new book to the library
function addBook(title, author, pages) {
    const newBook = new Book(title, author, pages);
    library.push(newBook);
    console.log(`Book added: ${newBook.getInfo()}`);
}

// Function to search for books by title
function searchByTitle(searchTitle) {
    return library.filter(book => book.title.toLowerCase().includes(searchTitle.toLowerCase()));
}

// Function to search for books by author
function searchByAuthor(searchAuthor) {
    return library.filter(book => book.author.toLowerCase().includes(searchAuthor.toLowerCase()));
}

// Task 4: Filter books with more than 100 pages
function filterBooksByPageCount(maxPages = 100) {
    return library.filter(book => book.pages <= maxPages);
}

// Function to add "Title: " and "Author: " prefixes to the library
function formatLibrary() {
    return library.map(book => ({
        title: `Title: ${book.title}`,
        author: `Author: ${book.author}`,
        pages: book.pages
    }));
}

// Example Usage
function exampleUsage() {
    console.log("Adding books...");
    addBook("The Great Gatsby", "F. Scott Fitzgerald", 180);
    addBook("To Kill a Mockingbird", "Harper Lee", 281);
    addBook("The Little Prince", "Antoine de Saint-Exupéry", 96);

    console.log("\nSearch by Title 'The':");
    searchByTitle("The").forEach(book => console.log(book.getInfo()));

    console.log("\nSearch by Author 'Harper':");
    searchByAuthor("Harper").forEach(book => console.log(book.getInfo()));

    console.log("\nBooks with 100 or fewer pages:");
    filterBooksByPageCount().forEach(book => console.log(book.getInfo()));

    console.log("\nFormatted Library:");
    formatLibrary().forEach(formattedBook => console.log(formattedBook));
}

// Run the example
exampleUsage();
