const books = require('../books');

const handleGetById = (req, h) => {
  const { bookId } = req.params;
  const book = books.filter((book) => book.id === bookId)[0];

  if (book === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Buku tidak ditemukan',
    });

    response.code(404);
    return response;
  }

  const response = h.response({
    status: 'success',
    data: {
      book,
    },
  });

  response.code(200);
  return response;
};

module.exports = handleGetById;
