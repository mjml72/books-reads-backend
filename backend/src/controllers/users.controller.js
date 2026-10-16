import { UsersModel } from '../models/users.model.js';

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
      const { userId } = req.params;
      const response = await UsersModel.findById(userId);

      if (!response) {
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

      if (!response) {
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
      res.status(500).json(error.message);
    }
  },

  // listar todos los libros del usuario
  getAllUserBooks: async (req, res) => {
    try {
      const { userId } = req.params;
      const response = await UsersModel.getAllUserBooks(userId);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error.message);
    }
  },

  // buscar  libro del usuario 
  getUserBook: async (req, res) => {
    try {
      const { userId, bookId } = req.params;
      const response = await UsersModel.getUserBook(userId, bookId);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error.message);
    }

  },

  // añadir libro a la lista de libros del ususario
  addToUserBooks: async (req, res) => {
    try {
      const { user_id, book_id } = req.body;
      const response = await UsersModel.addToUserBooks(user_id, book_id);
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json(error.message);
    }

  },

  // borrar libro a la lista de libros del ususario
  deleteFromUserBooks: async (req, res)=> {
    try {
      const { userId, bookId } = req.params;
      await UsersModel.deleteFromUserBooks(userId, bookId);
      res.json({ message: 'Libro eliminado' });

    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  update: async (req, res) => {
    try {
      const { userId } = req.params;
      const { name, email, password } = req.body;
      const response = await UsersModel.update(userId, name, email, password);
      res.status(200).json(response);

    } catch (error) {
      res.status(500).send(error.message);
    }
  },

    delete: async (req, res) => {
      try {
        const { userId } = req.params;
        await UsersModel.delete(userId);
        res.json({ message: 'User eliminado' });

      } catch (error) {
        res.status(500).send(error.message);
      }
    }

};