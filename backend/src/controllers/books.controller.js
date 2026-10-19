import { BooksModel } from '../models/books.model.js';


export const BooksController = {
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

  findById: async (req, res) => {
    try {
      const { bookId } = req.params;
      const response = await BooksModel.findById(bookId);

      if (!response) {
        return res.status(404).json({ error: 'Book not found' });
      }
      return res.status(200).json(response);

    } catch (error) {
      return res.status(500).send(error.message);
    }
  },



  create: async (req, res) => {
    try {
      const { title, description, published, cover, pages, isbn } = req.body;
      const response = await BooksModel.create(title, description, published, cover, pages, isbn);
      return res.status(201).json(response);
    } catch (err) {
      return res.status(500).send(error.message);
    }
  },

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
