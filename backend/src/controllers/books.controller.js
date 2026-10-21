import { BooksModel } from '../models/books.model.js';


export const BooksController = {
  // busqueda de libro por titulo o lista de todos los libros
  findAll: async (req, res) => {
    try {
      const { title } = req.query;
      let response;

      if (title) {
        response = await BooksModel.findByTitle(title);

      } else {
        response = await BooksModel.findAll();

      }

      if (!response) {
        return res.status(404).json({ error: 'Book not found' });
      }

      return res.status(200).json(response);

    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  // busqueda de libro por id
  findById: async (req, res) => {
    try {
      const { bookId } = req.params;
      const book = await BooksModel.findById(bookId);

      if (!book) {
        return res.status(404).json({ error: 'Book not found' });
      }
      return res.status(200).json(book);

    } catch (error) {
      return res.status(500).send(error.message);
    }
  },


  // crea nuevo libro
  create: async (req, res) => {
    try {
      const { title, description, published, cover, pages, isbn } = req.body;
      const response = await BooksModel.create(title, description, published, cover, pages, isbn);
      return res.status(201).json(response);
    } catch (err) {
      return res.status(500).send(error.message);
    }
  },

  // actualiza datos de libro
  update: async (req, res) => {
    try {
      const { bookId } = req.params
      const { title, description, published, cover, pages, isbn } = req.body;
      const response = await BooksModel.update(bookId, title, description, published, cover, pages, isbn);
      return res.status(200).json(response);

    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  // borra libro de la base de datos
  delete: async (req, res) => {
    try {
      const { bookId } = req.params;
      await BooksModel.delete(bookId);
      return res.status(200).json({ message: 'Book eliminado' });

    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
};
