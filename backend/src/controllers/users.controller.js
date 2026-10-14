import {UsersModel} from '../models/users.model.js';

export const UsersController = {
  findAll: async (req, res) => {
    try {
      const response = await UsersModel.findAll();
      res.status(200).json(response);

    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  
  findById: async (req, res) => {
    try {
      const { id } = req.params;
      const response = await UsersModel.findById(id);

      if (!response){
        return res.status(404).json({ error: 'User not found' });
      } 
      res.json(response);

    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  findByName: async (req, res) => {
    try {
      const { name } = req.query;
      const response = await UsersModel.findByName(name);

      if (!response){
        return res.status(404).json({ error: 'User not found' });
      } 
      res.json(response);

    } catch (error) {
      res.status(500).send(error.message);
    }
  },


  create: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const response = await UsersModel.create(name, email, password);
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json({ error: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, email, password } = req.body;
      const response = await UsersModel.update(id, name, email, password);
      res.status(200).json(response);

    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      await UsersModel.delete(id);
      res.json({ message: 'User eliminado' });

    } catch (error) {
      res.status(500).send(error.message);
    }
  }

};