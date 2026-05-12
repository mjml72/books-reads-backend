import { BooksWritersModel } from '../models/books-writers.model.js';


export const BooksWritersController = {
  findAll: async (req, res) => {
    try {
      const response = await BooksWritersModel.findAll();
      res.status(200).json(response);

    } catch (error) {
      res.status(500).send(error.message);
    }
  },


  findByBookId: async (req, res) => {
    try {
      const { bookId } = req.params;
      const response = await BooksWritersModel.findByBookId(bookId);

      if (!response) {
        return res.status(404).json({ error: 'Book not found' });
      }
      res.json(response);

    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  findByWriterId: async (req, res) => {
    try {
      const { writerId } = req.params;
      const response = await BooksWritersModel.findByWriterId(writerId);

      if (!response) {
        return res.status(404).json({ error: 'Book not found' });
      }
      res.json(response);

    } catch (error) {
      res.status(500).send(error.message);
    }
  },


  findByIds: async (req, res) => {
    try {
      const { bookId, writerId } = req.params;
      const response = await BooksWritersModel.findByIds(bookId, writerId);
      if (!response){
        return res.status(404).json({ error: 'Book not found' });
      } 
      res.json(response);


    } catch (error) {
      res.status(500).send(error.message);
    }
  },


  create: async (req, res) => {
    try {
      const { bookID, writerID } = req.body;
      const response = await BooksWritersModel.create(bookID, writerID);
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json({ error: err.message });
    }
  },


  delete: async (req, res) => {
    try {
      const { bookId, writerId } = req.params;
      await BooksWritersModel.delete(bookId, writerId);
      res.json({ message: 'Relacion eliminado' });

    } catch (error) {
      res.status(500).send(error.message);
    }
  }
};
