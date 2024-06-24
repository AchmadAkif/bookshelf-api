const books = require('../books');

const handleDeleteBook = (req, h) => {
  const { bookId } = req.params;

  const dataIndex = books.findIndex((book) => book.id === bookId);

  if (dataIndex >= 0) {
    books.splice(dataIndex, 1);

    const response = h.response({
      status: 'success',
      message: 'Buku berhasil dihapus',
    });

    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku gagal dihapus. Id tidak ditemukan',
  });

  response.code(404);
  return response;
};

module.exports = handleDeleteBook;
