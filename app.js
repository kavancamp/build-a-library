class Media {
    constructor(title){
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    get title(){
      return this._title;
    }
    get isCheckedOut(){
      return this._isCheckedOut;
    }
    get ratings(){
      return this._ratings;
    }
    set isCheckedOut(newCheckOut){
      this._isCheckedOut = newCheckOut;
    }
    toggleCheckOutStatus() {
         this._isCheckedOut = !this._isCheckedOut;
    }
    addRating(inputValue) {
          if(inputValue <= 5) {
              this._ratings.push(inputValue);
          } else {
              console.log('Rating have to be under 5');
          }
          
      }
      // sum ratings in array & divide it with the length of array
  getAverageRating() {
    let sum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);  
        return  Math.floor(sum / this._ratings.length);
    }
    set isCheckedOut(checkIn) {
          this._isCheckedOut = checkIn;
    }
  }
  
  class Book extends Media {
    constructor(author, title, pages, genre){
      super(title)
      this._author = author;
      this._pages = pages;
      this._genre = genre;
    }
    get author(){
      return this._author;
    }
    get pages(){
      return this._pages;
    }
  }
  class Movie extends Media {
    constructor(title, director, runTime){
      super(title)
      this._director = director;
      this._runTime = runTime;
    }
    get runTime(){
      return this._runTime;
    }
    get director(){
      return this._director;
    }
  }
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  
  console.log(historyOfEverything.getAverageRating());
  
  const speed = new Movie('Jan de Bont', 'Speed', 116);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());