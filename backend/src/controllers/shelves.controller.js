import { ShelvesModel } from '../models/shelves.model.js';
import { UsersBooks } from '../services/UsersBooks.js';


export const ShelvesController = {
  // busqueda de estanteria por nombre o lista de todos las estanterias del ususario
  findAll: async (req, res) => {
    try {
      const { userId } = req.params;
      const { name } = req.query;

      let response;

      if (name) {
        response = await ShelvesModel.findByName(userId, name);

      } else {
        response = await ShelvesModel.findAll(userId);

      }

      if (!response) {
        return res.status(404).json({ error: 'Shelf not found' });
      }


      return res.status(200).json(response);

    } catch (error) {
      return res.status(500).send(error.message);
    }
  },


  // busqueda de estanteria por id de usuario
  findById: async (req, res) => {
    try {
      const { userId, shelfId } = req.params;
      const response = await ShelvesModel.findById(userId, shelfId);

      if (!response) {
        return res.status(404).json({ error: 'Shelf not found' });
      }
      return res.status(200).json(response);

    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  // crea nueva estanteria
  create: async (req, res) => {
    try {
      const { name, user_id } = req.body;
      const response = await ShelvesModel.create(name, user_id);
      res.status(201).json(response);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  // listar todos los libros de una estantería del usuario
  getAllBooksFromShelf: async (req, res) => {
    try {
      const { userId, shelfId } = req.params;
      const response = await ShelvesModel.getAllBooksFromShelf(userId, shelfId);
      res.status(200).json(response);

    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  // listar todas las estanterias de un libro del usuario
  getAllShelvesFromBook: async (req, res) => {
    try {
      const { bookId, userId } = req.params;
      const response = await ShelvesModel.getAllShelvesFromBook(bookId, userId);
      res.status(200).json(response);

    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  // añadir libro a la estanteria del ususario
  addBookToShelf: async (req, res) => {
    try {
      const { userId } = req.params;
      const { shelf_id, book_id } = req.body;

      // comprueba que el libro esta en la biblioteca del ususario
      const libroEnBiblioteca = await UsersBooks(userId, book_id);

      if (!libroEnBiblioteca) {
        return res.status(403).json({ error: "Este libro no está en la biblioteca del usuario." });
      }

      const response = await ShelvesModel.addBookToShelf(shelf_id, book_id);
      res.status(201).json(response);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  // borrar libro a la lista de libros del ususario
  deleteBookFromShelf: async (req, res) => {
    try {
      const { shelfId, bookId } = req.params;
      await ShelvesModel.deleteBookFromShelf(shelfId, bookId);
      res.status(200).json({ message: 'Libro eliminado' });

    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  // actualiza datos de estanteria
  update: async (req, res) => {
    try {
      const { shelfId } = req.params;
      const { name, user_id } = req.body;
      const response = await ShelvesModel.update(shelfId, name, user_id);
      res.status(200).json(response);

    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  // borra la estanteria de la base de datos
  delete: async (req, res) => {
    try {
      const { shelfId, userId } = req.params;
      await ShelvesModel.delete(shelfId, userId);
      res.status(200).json({ message: 'Shelf eliminado' });

    } catch (error) {
      res.status(500).send(error.message);
    }
  }
};
