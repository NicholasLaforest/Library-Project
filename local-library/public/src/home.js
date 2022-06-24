/* {
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

function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
 let borrow = books.reduce((acc, book) => {
    return (acc + (!book.borrows[0].returned));
  }, 0);
  return borrow 
}


function helperFunction(arrays, id) {
  return arrays.reduce((acc, object) => {
      return Object.assign(acc, { [object[id]]:( acc[object[id]] || [] ).concat(object)})
    }, {});
}
Object.size = function(object) {
  let size = 0, id;
  for (id in object) {
      if (object.hasOwnProperty(id)) size++;
  }
  return size;
};






function getMostCommonGenres(books) {
  const genres = helperFunction(books, 'genre');
  let results = [];
  for (let id in genres) {
  results.push({
    name: id,
    count: Object.size(genres[id]), 
  });
}
  results.sort((bookA, bookB) =>  bookB.count - bookA.count);
  return results.slice(0,5);     
}  


function getMostPopularBooks(books) {
  return books.map(book => {
    return {
      name: book.title,
      count: book.borrows.length
    }
  }).sort((bookA, bookB) => bookB.count - bookA.count).splice(0,5)
}

function getMostPopularAuthors(books, authors) {
   let result = [];
  let popular = books.filter((book) => authors.find((author) => author.id === book.authorId));
     popular.forEach((book) => {
      let author = authors.find((author) => author.id === book.authorId); 
      result.push( {name: `${author.name.first} ${author.name.last}`, count: book.borrows.length} )
    });
  return (result.sort((countA, countB) => countA.count < countB.count ? 1 : -1)).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
