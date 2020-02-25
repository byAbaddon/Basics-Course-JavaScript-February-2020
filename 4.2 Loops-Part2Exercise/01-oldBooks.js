function oldBooks(arg) {
  book = arg.shift()
  bookCount = arg.shift()
  bookIndex = arg.indexOf(book)
  console.log(bookIndex > -1 
   ? `You checked ${bookIndex} books and found it.` 
   : `The book you search is not here!\nYou checked ${bookCount} books.`
  );
}
// oldBooks(['Troy', '8','Stronger','Life Style','Troy',])
// oldBooks(['Troy', '4','Stronger','Life Style','Rambo','Joe'])
  
 
  
  
  
