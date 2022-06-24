/*
{
  "id": "5f4471327864ee880caf5afc",
  "title": "reprehenderit quis laboris adipisicing et",
  "genre": "Poetry",
  "authorId": 20,
  "borrows": [
    {
      "id": "5f446f2e2a4fcd687493a775",
      "returned": false
    },
    {
      "id": "5f446f2ebe8314bcec531cc5",
      "returned": true
    },
    {
      "id": "5f446f2ea508b6a99c3e42c6",
      "returned": true
    }
  ]
} */



function findAuthorById(authors, id) {
  const auth = authors.find((authors) => authors.id === id);
  return auth
}

function findBookById(books, id) {
  const find = books.find((book) => book.id === id); 
  return find
}

function partitionBooksByBorrowedStatus(books) {

const returned = books.filter((book) => book.borrows[0].returned);
const notReturned = books.filter((book) => !book.borrows[0].returned);  
  return [ notReturned , returned]
  
}

function getBorrowersForBook(book, accounts) {
 let results = [];
 let borrowed = book.borrows
 borrowed.forEach((borrow) => { 
  const borrower = accounts.find((account) => borrow.id === account.id) 
  borrower.returned = borrow.returned
   results.push(borrower);
 }); return results.slice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
