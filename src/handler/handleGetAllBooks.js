const books = require('../books');

const handleGetAllBooks = (req, h) => {
  const { name, reading, finished } = req.query;

  if (books.length !== 0) {
    let filterData = books;

    if (finished !== undefined) {
      filterData = books.filter((book) => book.finished == finished);
    }

    if (reading !== undefined) {
      filterData = books.filter((book) => book.reading == reading);
    }

    if (name !== undefined) {
      filterData = books.filter((book) =>
        book.name.toLowerCase().includes(name.toLowerCase()),
      );
    }

    const response = h.response({
      status: 'success',
      data: {
        books: filterData.map((data) => ({
          id: data.id,
          name: data.name,
          publisher: data.publisher,
        })),
      },
    });

    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'success',
    data: {
      books: [],
    },
  });

  response.code(200);
  return response;
};

module.exports = handleGetAllBooks;
