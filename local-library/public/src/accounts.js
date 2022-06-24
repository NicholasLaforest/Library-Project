
/* {
  "id": "5f446f2ecfaf0310387c9603",
  "name": {
    "first": "Esther",
    "last": "Tucker"
  },
  "picture": "https://api.adorable.io/avatars/75/esther.tucker@zillacon.me",
  "age": 25,
  "company": "ZILLACON",
  "email": "esther.tucker@zillacon.me",
  "registered": "Thursday, May 28, 2015 2:51 PM"
} */


function findAccountById(accounts, id) {
  const accountById = accounts.find((accounts) => accounts.id === id);
  return accountById
}

function sortAccountsByLastName(accounts) {
 const dog = accounts.sort((nameA, nameB) => (nameA.name.last > nameB.name.last) ? 1 : -1);
  return dog
}

function getTotalNumberOfBorrows(account, books) {
  let dog = 0;
  const id = account.id
   books.forEach((book) => book.borrows.forEach((isBorrowed) => (id === isBorrowed.id) && dog++));
  return dog
}

function getBooksPossessedByAccount(account, books, authors) { 
  const id = account.id; 
  let booksPossessed = books.filter((book) => book.borrows[0].returned === false && book.borrows[0].id === id);
  let bookInfo = booksPossessed.map((detail) => ({ 
  ...detail, author: authors.find((author) => author.id === detail.authorId)
  }));
  return bookInfo;
}







module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
