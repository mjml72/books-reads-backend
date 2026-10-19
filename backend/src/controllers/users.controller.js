import { UsersModel } from '../models/users.model.js';

export const UsersController = {
  findAll: async (req, res) => {
    try {
      const { name } = req.query;
      let response;

      if (name) {
        response = await UsersModel.findByName(name);

      } else {
        response = await UsersModel.findAll();

      }

      if (!response) {
        return res.status(404).json({ error: 'User not found' });
      }


      return res.status(200).json(response);

    } catch (error) {
      return res.status(500).send(error.message);
    }
  },


  findById: async (req, res) => {
    try {
      const { userId } = req.params;
      const response = await UsersModel.findById(userId);

      if (!response) {
        return res.status(404).json({ error: 'User not found' });
      }

      return res.status(200).json(response);

    } catch (error) {
      return res.status(500).send(error.message);
    }
  },



  create: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const response = await UsersModel.create(name, email, password);
      return res.status(201).json(response);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  // listar todos los libros del usuario
  getAllUserBooks: async (req, res) => {
    try {
      const { userId } = req.params;
      const response = await UsersModel.getAllUserBooks(userId);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  // buscar  libro del usuario 
  getUserBook: async (req, res) => {
    try {
      const { userId, bookId } = req.params;
      const response = await UsersModel.getUserBook(userId, bookId);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).send(error.message);
    }

  },

  // añadir libro a la lista de libros del ususario
  addToUserBooks: async (req, res) => {
    try {
      const { user_id, book_id } = req.body;
      const response = await UsersModel.addToUserBooks(user_id, book_id);
      return res.status(201).json(response);
    } catch (error) {
      return res.status(500).send(error.message);
    }

  },

  // borrar libro a la lista de libros del ususario
  deleteFromUserBooks: async (req, res) => {
    try {
      const { userId, bookId } = req.params;
      await UsersModel.deleteFromUserBooks(userId, bookId);
      return res.status(200).json({ message: 'Libro eliminado' });

    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  update: async (req, res) => {
    try {
      const { userId } = req.params;
      const { name, email, password } = req.body;
      const response = await UsersModel.update(userId, name, email, password);
      return res.status(200).json(response);

    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  delete: async (req, res) => {
    try {
      const { userId } = req.params;
      await UsersModel.delete(userId);
      return res.status(200).json({ message: 'User eliminado' });

    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

};