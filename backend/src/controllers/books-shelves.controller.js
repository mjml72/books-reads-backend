import { BooksShelvesModel } from '../models/books-shelves.model.js';


export const BooksShelvesController = {
  findAll: async (req, res) => {
    try {
      const response = await BooksShelvesModel.findAll();
      res.status(200).json(response);

    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  findByBookId: async (req, res) => {
    try {
      const { bookId } = req.params;
      const response = await BooksShelvesModel.findByBookId(id);

      if (!response) return res.status(404).json({ error: 'shelve not found' });
      res.json(response);

    } catch (error) {
      res.status(404).send(error.message);
    }
  },

  findByShelveId: async (req, res) => {
    try {
      const { id } = req.params;
      const response = await BooksShelvesModel.findByShelveId(id);

      if (!response) return res.status(404).json({ error: 'shelve not found' });
      res.json(response);

    } catch (error) {
      res.status(404).send(error.message);
    }
  },

  create: async (req, res) => {
    try {
      const {bookID, shelvesID} = req.body;
      const created = await BooksShelvesModel.create(bookID, shelvesID);
      res.status(201).json(created);
    } catch (error) {
      res.status(400).json({ error: err.message });
    }
  },

  update: async (req, res) => {
    try {
      
      const {bookID, shelvesID} = req.body; 
      const updated = await BooksShelvesModel.update(bookID, shelvesID);
      res.status(200).json(updated);
      
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  delete: async (req, res) => {
    try {
      const {bookId, shelvesId} = req.params;
      await BooksShelvesModel.delete(bookID, shelvesID);
      res.json({ message: 'Relacion eliminado' });
      
    } catch (error) {
      res.status(500).send(error.message);      
    }
  }
};
