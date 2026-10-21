import { BookStatusModel } from '../models/bookstatus.model.js';



export const BookStatusController = {

  // busqueda de status de libro por id de libro, id de usuario
  findById: async (req, res) => {
    try {
      const { userId, bookId } = req.params;
      const response = await BookStatusModel.findById(userId, bookId);

      if (!response) {
        return res.status(404).json({ error: 'Status not found' });
      }
      return res.status(200).json(response);

    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  // crea nuevo status de libro
  create: async (req, res) => {
    try {
      const { user_id, book_id, progress, status, rating, start_reading, end_reading } = req.body;
      const response = await BookStatusModel.create(user_id, book_id, progress, status, rating, start_reading, end_reading);
      return res.status(201).json(response);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  // actualiza datos de status de libro
  update: async (req, res) => {
    try {
      const { userId, bookId } = req.params
      const { progress, status, rating, start_reading, end_reading } = req.body;
      const response = await BookStatusModel.update(userId, bookId, progress, status, rating, start_reading, end_reading);
      return res.status(200).json(response);

    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  // borra datos del status del libro de la base de datos
  delete: async (req, res) => {
    try {
      const { userId, bookId } = req.params;
      await BookStatusModel.delete(userId, bookId);
      return res.status(200).json({ message: 'Bookstatus eliminado' });

    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
};
