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
      const response = await BooksShelvesModel.findByBookId(bookId);

      if (!response){
        return res.status(404).json({ error: 'Shelve not found' });
      } 
      res.json(response);

    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  findByShelveId: async (req, res) => {
    try {
      const { shelvesId } = req.params;
      const response = await BooksShelvesModel.findByShelveId(shelvesId);

      if (!response){
        return res.status(404).json({ error: 'Shelve not found' });
      } 
      res.json(response);

    } catch (error) {
      res.status(500).send(error.message);
    }
  },


  findByIds: async (req, res) => {
    try {
      const { bookId, shelvesId } = req.params;
      const response = await BooksShelvesModel.findByIds(bookId, shelvesId);
      if (!response) return res.status(404).json({ error: 'Shelve not found' });
      res.json(response);

    } catch (error) {
      res.status(500).send(error.message);
    }
  },


  create: async (req, res) => {
    try {
      const { bookID, shelvesID } = req.body;
      const response = await BooksShelvesModel.create(bookID, shelvesID);
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json({ error: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      const { bookId, shelvesId } = req.params;
      await BooksShelvesModel.delete(bookId, shelvesId);
      res.json({ message: 'Relacion eliminado' });

    } catch (error) {
      res.status(500).send(error.message);
    }
  }
};
