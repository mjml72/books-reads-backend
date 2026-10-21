import { UsersModel } from '../models/users.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

process.loadEnvFile('./.env');
const secretKey = process.env.SECRET_KEY;




export const UsersController = {
  // busqueda de usuario por nombre o lista de todos los usuarios
  findAll: async (req, res) => {
    try {
      const { name } = req.query;
      let response;

      if (name) {
        response = await UsersModel.findByName(name);

      } else {
        response = await UsersModel.findAll();

      }



      return res.status(200).json(response);

    } catch (error) {
      return res.status(500).send(error.message);
    }
  },


  // busqueda de usuario por id devuelve los datos de cuenta al usuario
  findById: async (req, res) => {
    try {
      const { userId } = req.params;
      const user = await UsersModel.findById(userId);

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      return res.status(200).json(user);

    } catch (error) {
      return res.status(500).send(error.message);
    }
  },


  // login de usuario
  loginUser: async (req, res) => {
    try {
      const { email, password } = req.body;


      const user = await UsersModel.findByEmail(email);
      if (!user) {
        console.log("entra");
        return res.status(401).json({ error: "Credenciales incorrectas" });
      }

      // Comparar la contraseña ingresada con la encriptada en la BD
      const match = await bcrypt.compare(password, user.password);

      if (!match) {
        return res.status(401).json({ error: "Credenciales incorrectas" });
      }

      const token = jwt.sign(user, secretKey, { expiresIn: '2h' });

      return res.json({ message: "Login correcto", userId: user.user_id, token });

    } catch (error) {
      return res.status(500).send(error.message);
    }
  },


  // registro de nuevo ususario, crea nuevo usuario
  registerUser: async (req, res) => {
    try {
      const { name, email, password } = req.body;

      // Definir los "salt rounds" (costo de procesamiento, 10 es el estándar seguro)
      const saltRounds = 10;

      //Encriptar la contraseña de forma asíncrona
      const hashedPassword = await bcrypt.hash(password, saltRounds);


      const response = await UsersModel.create(name, email, hashedPassword);
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

      if (!response) {
        return res.status(404).json({ error: 'User and book not found' });
      }

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

  // actualiza datos de usuario
  update: async (req, res) => {
    try {
      const { userId } = req.params;
      const { name, email, password } = req.body;

      const saltRounds = 10;

      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const response = await UsersModel.update(userId, name, email, hashedPassword);
      return res.status(200).json(response);

    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  // borra datos del usuario de la base de datos
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