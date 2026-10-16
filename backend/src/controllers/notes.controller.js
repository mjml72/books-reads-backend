import { NotesModel } from '../models/notes.model.js';



export const NotesController = {
  findByBookId: async (req, res) => {
    try {
      const { bookId, userId } = req.params;
      const response = await NotesModel.findByBookId(bookId, userId);

      if (!response) {
        return res.status(404).json({ error: 'Note not found' });
      }
      res.json(response);

    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  findById: async (req, res) => {
    try {
      const { noteId } = req.params;
      const response = await NotesModel.findById(noteId);

      if (!response) {
        return res.status(404).json({ error: 'Note not found' });
      }
      res.json(response);

    } catch (error) {
      res.status(500).send(error.message);
    }
  },


  create: async (req, res) => {
    try {
      const { text, created, book_id, user_id } = req.body;
      const response = await NotesModel.create(text, created, book_id, user_id);
      res.status(201).json(response);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  update: async (req, res) => {
    try {
      const { noteId } = req.params;
      const { text, created, book_id, user_id } = req.body;
      const response = await NotesModel.update(noteId, text, created, book_id, user_id);
      res.status(200).json(response);

    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  delete: async (req, res) => {
    try {
      const { noteId } = req.params;
      await NotesModel.delete(noteId);
      res.json({ message: 'Note eliminado' });

    } catch (error) {
      res.status(500).send(error.message);
    }
  }
};
