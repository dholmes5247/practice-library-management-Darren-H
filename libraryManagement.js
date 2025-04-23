class LibraryItem {
   constructor(title, id, isAvailable=true) {
      this.title = title;
      this.id = id;
      this.isAvailable = isAvailable;
   }
   checkout () {
      if (this.isAvailable) {
         this.isAvailable = false;
         console.log(`${this.title} has already been checked out.`);
      } else {
         console.log(`${this.title} is currently available for check out.`);
      }
   }

   returnItem() {
      this.isAvailable = true;
      console.log(`${this.title} has been returned`) ;
   }
}

class Book extends LibraryItem {
   constructor(title, id, author, genre, isAvailable) {
      super(title, id, isAvailable);
      this.author = author;
      this.genre = genre;

   }
   describe () {
      console.log(`${this.title} is a ${this.genre} book by ${this.author}`)
   }
}

class DVD extends LibraryItem {
   constructor(title, id, director, duration, isAvailable) {
      super(title, id, isAvailable);
      this.director = director;
      this.duration = duration;

   }
   describe () {
      console.log(`${this.title} is a DVD that is ${this.duration} minutes long.`)
   }
}

class Magazine extends LibraryItem {
   constructor(title, id, issueNumber, publisher, isAvailable) {
      super(title, id, isAvailable);
      this.publisher = publisher;
      this.issueNumber = issueNumber;
   }
   describe () {
      console.log(`${this.title} is a Magazine & ${this.issueNumber} is the issue number.`)
   }
}

console.log("-----------------------------------------------------------------");

let Book1 = new Book("The Accountant", 66554, "Darren Holmes", true);
Book1.describe();
Book1.checkout();
Book1.returnItem();

console.log("-----------------------------------------------------------------");

console.log("-----------------------------------------------------------------");

let DVD1 = new DVD("Miracle", 983533, "Ben Hur", 125, false);
DVD1.describe();
DVD1.checkout();
DVD1.returnItem();

console.log("-----------------------------------------------------------------");

console.log("-----------------------------------------------------------------");

let Magazine1 = new Magazine("Sports Illustrated", 45422343, 26, "Random House", true);
Magazine1.describe();
Magazine1.checkout();
Magazine1.returnItem();

console.log("-----------------------------------------------------------------");
