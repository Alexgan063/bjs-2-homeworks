// Задание 1 - Книги и издания

class PrintEditionItem{
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this._state = 100;
      this.type = null;
    }
  
    fix() {
      this.state *= 1.5;
    }
  
    set state(number) {
      if (number < 0) {
        this._state = 0;
      } else if (number > 100) {
        this._state = 100;
      } else {
        this._state = number;
      }  
    }
    
    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount){
      super(name);
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this._state = 100;
      this.type = "magazine";
  }
  }
   
  class Book extends PrintEditionItem {
    constructor ( author, name, releaseDate, pagesCount){
      super(name);
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this._state = 100;
      this.type = "book";
      this.author = author;
  }
  }

  class NovelBook extends Book {
    constructor ( author, name, releaseDate, pagesCount){
      super(name);
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this._state = 100;
      this.type = "novel";
      this.author = author;
  }
  }

  class FantasticBook extends Book {
    constructor ( author, name, releaseDate, pagesCount){
      super(name);
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this._state = 100;
      this.type = "fantastic";
      this.author = author;
  }
  }
  
  class DetectiveBook extends Book {
    constructor ( author, name, releaseDate, pagesCount){
      super(name);
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this._state = 100;
      this.type = "detective";
      this.author = author;
  }
  }

  // Задаине 2 - библиотека

  class Library{
    constructor(name){
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        if (book.state > 30){
            this.books.push(book);
        }
    }

    findBookBy(type, value){
        return this.books.find(book => book[type] === value, 0) || null;
    }

    giveBookByName(bookName) {
        const book = this.findBookBy('name', bookName);
        if (book) {
            this.books.splice(this.books.indexOf(book), 1);
        }
        return book;
      }

  }