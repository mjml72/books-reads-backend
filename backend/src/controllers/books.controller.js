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

      if (!response) return res.status(404).json({ error: 'Book not found' });
      res.json(response);

    } catch (error) {
      res.status(404).send(error.message);
    }
  },

  findByTitle: async (req, res) => {
    try {
      const { title } = req.body
      const response = await BooksModel.findById(title);

      if (!response) return res.status(404).json({ error: 'Book not found' });
      res.json(response);

    } catch (error) {
      res.status(404).send(error.message);
    }
  },


  create: async (req, res) => {
    try {
      const data = req.body;
      const created = await BooksModel.create(data);
      res.status(201).json(newBook);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const updated = await BooksModel.update(id, data);
      res.status(200).json(updated);

    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      await BooksModel.delete(id);
      res.json({ message: 'Usuario eliminado' });

    } catch (error) {
      res.status(500).send(error.message);
    }
  }
};
