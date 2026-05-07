import { NotesModel } from '../models/notes.model.js';


export const NotesController = {
  findAll: async (req, res) => {
    try {
      const response = await NotesModel.findAll();
      res.status(200).json(response);

    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  findById: async (req, res) => {
    try {
      const { id } = req.params;
      const response = await NotesModel.findById(id);

      if (!response) return res.status(404).json({ error: 'Note not found' });
      res.json(response);

    } catch (error) {
      res.status(404).send(error.message);
    }
  },

  findByBookId: async (req, res) => {
    try {
      const { bookId } = req.params;
      const response = await NotesModel.findByBookId(id);

      if (!response) return res.status(404).json({ error: 'Note not found' });
      res.json(response);

    } catch (error) {
      res.status(404).send(error.message);
    }
  },

  create: async (req, res) => {
    try {
      const {text, created, bookID} = req.body;
      const created = await NotesModel.create(text, created, bookID);
      res.status(201).json(created);
    } catch (error) {
      res.status(400).json({ error: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const {id} = req.params;
      const {text, created, bookID} = req.body; 
      const updated = await NotesModel.update(id, text, created, bookID);
      res.status(200).json(updated);
      
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  delete: async (req, res) => {
    try {
      const {notesID, booksID} = req.params;
      await NotesModel.delete(notesID, booksID);
      res.json({ message: 'Note eliminado' });
      
    } catch (error) {
      res.status(500).send(error.message);      
    }
  }
};
