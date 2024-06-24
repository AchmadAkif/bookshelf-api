const handleAddBook = require("../handler/handleAddBook");
const handleGetAllBooks = require("../handler/handleGetAllBooks");
const handleGetById = require("../handler/handleGetById");
const handleEditBook = require("../handler/handleEditBook");
const handleDeleteBook = require("../handler/handleDeleteBook");

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: handleAddBook,
  },
  {
    method: "GET",
    path: "/",
    handler: handleGetAllBooks,
  },
  {
    method: "GET",
    path: "/books",
    handler: handleGetAllBooks,
  },
  {
    method: "GET",
    path: "/books/{bookId}",
    handler: handleGetById,
  },
  {
    method: "PUT",
    path: "/books/{bookId}",
    handler: handleEditBook,
  },
  {
    method: "DELETE",
    path: "/books/{bookId}",
    handler: handleDeleteBook,
  },
];

module.exports = routes;
