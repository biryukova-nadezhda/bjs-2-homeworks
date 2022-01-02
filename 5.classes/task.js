//Задача №1
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(newState) {
        if (newState < 0) {
            this.state = 0;
        } else if (newState > 100) {
            this.state = 100;
        } else {
            this._state = newState;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type = "magazine") {
        super(name, releaseDate, pagesCount, state);
        this.type = type;
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state, type = "book") {
        super(name, releaseDate, pagesCount, state);
        this.author = author;
        this.type = type;
    }
}

class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, state, type = "novel", author) {
        super(name, releaseDate, pagesCount, state, author);
        this.type = type;
    }
}

class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, state, type = "fantastic", author) {
        super(name, releaseDate, pagesCount, state, author);
        this.type = type;
    }
}

class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, state, type = "detective", author) {
        super(name, releaseDate, pagesCount, state, author);
        this.type = type;
    }
}

//Задача №2

class Library {
    constructor(name, books = [], state) {
        this.name = name;
        this.books = books;
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let foundBook = this.books.find(arr => arr[type] === value);

        if (typeof foundBook === "object" && foundBook != null) {
            return foundBook;
        } else { return null };
    }

    giveBookByName(bookName) {
        let index = this.books.findIndex(item => item.name === bookName);

        if (index != -1) {
            return this.books.splice(index, 1)[0];
        } else {
            return null;
        }
    }
}