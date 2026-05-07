import { WritersModel } from '../models/writers.model.js';


export const WritersController = {
  findAll: async (req, res) => {
    try {
      const response = await WritersModel.findAll();
      res.status(200).json(response);

    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  findById: async (req, res) => {
    try {
      const { id } = req.params;
      const response = await WritersModel.findById(id);

      if (!response) return res.status(404).json({ error: 'Writer not found' });
      res.json(response);

    } catch (error) {
      res.status(404).send(error.message);
    }
  },

  findByName: async (req, res) => {
    try {
      const {search} = req.params;
      const response = await WritersModel.findByName(search);

      if (!response) return res.status(404).json({ error: 'Writer not found' });
      res.json(response);

    } catch (error) {
      res.status(404).send(error.message);
    }
  },


  create: async (req, res) => {
    try {
      const {name} = req.body;
      const created = await WritersModel.create(name);
      res.status(201).json(created);
    } catch (error) {
      res.status(400).json({ error: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const {id} = req.params;
      const {name} = req.body; 
      const updated = await WritersModel.update(id, name);
      res.status(200).json(updated);
      
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  delete: async (req, res) => {
    try {
      const {id} = req.params;
      await WritersModel.delete(id);
      res.json({ message: 'Writer eliminado' });
      
    } catch (error) {
      res.status(500).send(error.message);      
    }
  }
};
