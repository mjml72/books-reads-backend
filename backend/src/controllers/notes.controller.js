import { NotesModel } from '../models/notes.model.js';



export const NotesController = {
  // busqueda de notas de libro por id del libro
  findByBookId: async (req, res) => {
    try {
      const { userId, bookId } = req.params;
      const response = await NotesModel.findByBookId(bookId, userId);

      if (!response) {
        return res.status(404).json({ error: 'Note not found' });
      }
      return res.status(200).json(response);

    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  // busqueda de nota por id
  findById: async (req, res) => {
    try {
      const { noteId } = req.params;
      const response = await NotesModel.findById(noteId);

      if (!response) {
        return res.status(404).json({ error: 'Note not found' });
      }
      return res.status(200).json(response);

    } catch (error) {
      return res.status(500).send(error.message);
    }
  },


  // crea notas nuevas de libro
  create: async (req, res) => {
    try {
      const { text, created, book_id, user_id } = req.body;
      const response = await NotesModel.create(text, created, book_id, user_id);
      return res.status(201).json(response);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  // actualiza datos de nota
  update: async (req, res) => {
    try {
      const { noteId } = req.params;
      const { text, created, book_id, user_id } = req.body;
      const response = await NotesModel.update(noteId, text, created, book_id, user_id);
      return res.status(200).json(response);

    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  // borra nota de libro de la base de datos
  delete: async (req, res) => {
    try {
      const { noteId } = req.params;
      await NotesModel.delete(noteId);
      return res.status(200).json({ message: 'Note eliminado' });

    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
};
