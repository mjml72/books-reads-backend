import { BooksModel } from '../models/books.model.js';


export const BooksController = {
  findAll: async (req, res) => {
    try {
      const response = await BooksModel.findAll();
      res.status(200).json(response);

    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  findById: async (req, res) => {
    try {
      const { id } = req.params;
      const response = await BooksModel.findById(id);

      if (!response) {
        return res.status(404).json({ error: 'Book not found' });
      }
      res.json(response);

    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  findByTitle: async (req, res) => {
    try {
      const { title } = req.query;
      const response = await BooksModel.findByTitle(title);

      if (!response) {
        return res.status(404).json({ error: 'Book not found' });
      }

      res.json(response);

    } catch (error) {
      res.status(500).send(error.message);
    }
  },


  create: async (req, res) => {
    try {
      const response = await BooksModel.create(req.body);
      res.status(201).json(response);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const response = await BooksModel.update(id, req.body);
      res.status(200).json(response);

    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      await BooksModel.delete(id);
      res.json({ message: 'Book eliminado' });

    } catch (error) {
      res.status(500).send(error.message);
    }
  }
};
