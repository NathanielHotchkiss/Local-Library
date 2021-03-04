// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
  //show how many book are in an array
  return books.length;
}

function getTotalAccountsCount(accounts) {
  //show how many accounts are in an array
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  //filter through books to find which are checked out
  const result = books.filter((book) =>
    book.borrows.some((borrow) => borrow.returned === false)
  );
  //count how many books are within the array
  return result.length;
}

function getMostCommonGenres(books) {
  const counts = books.reduce((acc, book) => {
    //create an object (acc) to count genre instances
    const currentCount = acc.hasOwnProperty(book.genre) ? acc[book.genre] : 0;
    acc[book.genre] = currentCount + 1;
    // [['fiction', 5], ['scifi', 6]]
    return acc;
  }, {});
  return (
    Object.entries(counts)
      //sort genres from most to least popular
      .sort((genreA, genreB) => {
        return genreB[1] - genreA[1];
      })
      //only return top 5 genres
      .slice(0, 5)
      //return object containing genre name & count
      .map((genre) => {
        return {
          name: genre[0],
          count: genre[1],
        };
      })
  );
}

function getMostPopularBooks(books) {
  return (
    books
      .reduce((acc, book) => {
        //deconstruct title & borrows from book
        const { title, borrows } = book;
        //add name & count to accumulator array
        acc.push({ name: title, count: borrows.length });
        return acc;
      }, [])
      //sort books from most to least popular
      .sort((bookA, bookB) => (bookA.count > bookB.count ? -1 : 1))
      //only return top 5 books
      .slice(0, 5)
  );
}

function borrowTotal(books) {
  //create accumulator to count how many borrows for each book
  return books.reduce((acc, book) => {
    //deconstruct books to get authorId & borrows
    const { authorId, borrows } = book;
    //check to see if authorId's match
    const currentCount = acc.hasOwnProperty(authorId) ? acc[authorId] : 0;
    //return an object containing authorId with a count of books.borrows
    acc[authorId] = currentCount + borrows.length;
    return acc;
  }, {});
}

function getMostPopularAuthors(books, authors) {
  //assigning a variable name to the helper function
  const borrowCountsByAuthor = borrowTotal(books);
  //grab the object containing authorId & borrows count
  return (
    Object.entries(borrowCountsByAuthor)
      //sort the authorId by most to least popular
      .sort((popularOne, popularTwo) => popularTwo[1] - popularOne[1])
      //only return top 5 authors
      .slice(0, 5)
      .map((author) => {
        //get the authors name using the id author[0]
        const authorObj = authors.find((obj) => obj.id === parseInt(author[0]));
        //create a string containing authors first & last name
        const string = `${authorObj.name.first} ${authorObj.name.last}`;
        //return completed object
        return {
          name: string,
          count: author[1],
        };
      })
  );
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
