// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
  //find the author that matches the given id
  return authors.find((author) => author.id === id);
}

const findBookById = (books, id) => {
  //find the book that matches the given id
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  //filter through books to find which are checked out
  const loanedOut = books.filter((book) =>
    book.borrows.some((borrow) => borrow.returned === false)
  );
  //filter through books to find which are available
  const availableBooks = books.filter((book) =>
    book.borrows.every((borrow) => borrow.returned === true)
  );
  //combine both arrays into one array
  return [loanedOut, availableBooks];
}

function getBorrowersForBook(book, accounts) {
  //accessing book borrows array
  return (
    book.borrows
      .map((transactions) => {
        //comparing book.id to account.id to access accounts info
        const accountsMatch = accounts.find(
          (account) => account.id === transactions.id
        );
        //combining the books values with account info
        return { ...transactions, ...accountsMatch };
      })
      //telling function to only display first 10 borrowers
      .slice(0, 10)
  );
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
