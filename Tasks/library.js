// library management
let library = {
    books :[],
    // function to add book to library
    adding:function(title,author) {
      const newBook ={title:title, author:author, available:true};
  this.books.push(newBook);
  console.log(`${newBook.title}is added to library`);
    },
    displaying:function(){
      console.log("books in library:");
      this.books.forEach(book =>{
        if(book.available){
          console.log(`${book.title} by ${book.author}`);
        }
      });
    },

   borrowing:function(title){
    const book= this.books.find(book => book.title === title);
    if (book){
      if(book.available){
  book.available = false;
  console.log(`You have borrowed a book ${book.title}`);
      }else {
        console.log(`${book.title} is not available`);
      } 
    } else{
      console.log(`${title} is not found`);
    }
   },

   returning: function(title){
    const book = this.books.find(book => book.title === title);
    if(book){
  if(!book.available){
    book.available = true;
   console.log (`you have returned ${title}`);
   }else { 
    console.log(`${title} is not available in library`);
   }
    }
   }
    };
    library.adding("The voice of knowlege","Thomas Scott");
    library.adding("The killer read","kelvin Malcus");
    library.adding("Watcher men","Bearin Pit");
    // library.displaying();
    library.borrowing("The voice of knowledge");
    library.borrowing("The killer read");
    library.borrowing("Watcher Men");
    library.displaying();
    library.returning("Watcher Men");
    library.displaying();