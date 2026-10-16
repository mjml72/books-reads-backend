import { BookStatusModel } from '../models/bookstatus.model.js';



export const BookStatusController = {


  findById: async (req, res) => {
    try {
      const { userId, bookId } = req.params;
      const response = await BookStatusModel.findById(userId, bookId);

      if (!response) {
        return res.status(404).json({ error: 'Status not found' });
      }
      res.json(response);

    } catch (error) {
      res.status(500).send(error.message);
    }
  },


  create: async (req, res) => {
    try {
      const { user_id, book_id, progress, status, rating, startReading, endReading} = req.body;
      const response = await BookStatusModel.create(user_id, book_id, progress, status, rating, startReading, endReading);
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json({ error: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const { userId, bookId} = req.params
      const { progress, status, rating, startReading, endReading } = req.body;
      const response = await BookStatusModel.update(userId, bookId, progress, status, rating, startReading, endReading);
      res.status(200).json(response);

    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  delete: async (req, res) => {
    try {
      const { userId, bookId } = req.params;
      await BookStatusModel.delete(userId, bookId);
      res.json({ message: 'Bookstatus eliminado' });

    } catch (error) {
      res.status(500).send(error.message);
    }
  }
};
