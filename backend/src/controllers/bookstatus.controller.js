import { BookStatusModel } from '../models/bookstatus.model.js';


export const BookStatusController = {
  findAll: async (req, res) => {
    try {
      const response = await BookStatusModel.findAll();
      res.status(200).json(response);

    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  findById: async (req, res) => {
    try {
      const { id } = req.params;
      const response = await BookStatusModel.findById(id);

      if (!response) return res.status(404).json({ error: 'Book not found' });
      res.json(response);

    } catch (error) {
      res.status(404).send(error.message);
    }
  },


  create: async (req, res) => {
    try {
      const data = req.body;
      const created = await BookStatusModel.create(data);
      res.status(201).json(created);
    } catch (error) {
      res.status(400).json({ error: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const {id} = req.params;
      const data = req.body; 
      const updated = await BookStatusModel.update(id, data);
      res.status(200).json(updated);
      
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  delete: async (req, res) => {
    try {
      const {id} = req.params;
      await BookStatusModel.delete(id);
      res.json({ message: 'Book eliminado' });
      
    } catch (error) {
      res.status(500).send(error.message);      
    }
  }
};
