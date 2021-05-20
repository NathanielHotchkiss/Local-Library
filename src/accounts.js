// Note: Please do not change the name of the functions. The tests use those names to validate your code.

const { getBorrowersForBook } = require("./books");

function findAccountById(accounts, id) {
  //loop through an array of accounts, find the one with matching id
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  //loop through an array of last names, sort alphabetically
  return accounts.sort((accountA, accountB) =>
    accountA.name.last > accountB.name.last ? 1 : -1
  );
}

function getTotalNumberOfBorrows(account, books) {
  //loop through books array
  const result = books.filter((book) => {
    //return true if the id's match
    return book.borrows.some((checkedout) => checkedout.id === account.id);
  });
  //return the length of all the id's that matched
  return result.length;
}

function getBooksPossessedByAccount(account, books, authors) {
  //find all books currently checked out by account
  const loanedBooks = books.filter((book) =>
    book.borrows.some((borrow) => !borrow.returned && borrow.id === account.id)
  );
  //loop through array of books
  for (let book of loanedBooks) {
    //include the books author, by comparing book.id to author.id
    book.author = authors.find((author) => book.authorId === author.id);
  }
  //return mutated array
  return loanedBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
