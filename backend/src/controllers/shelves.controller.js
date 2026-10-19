import { ShelvesModel } from '../models/shelves.model.js';


export const ShelvesController = {
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
      const { shelfId } = req.params;
      const response = await ShelvesModel.getAllBooksFromShelf(shelfId);
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
      const { shelf_id, book_id } = req.body;
      const response = await ShelvesModel.addBookToShelf(shelf_id, book_id);
      res.status(201).json(response);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  // borrar libro a la lista de libros del ususario
  deleteBookFromShelf: async (req, res) => {
    try {
      const { bookId, shelfId } = req.params;
      await ShelvesModel.deleteBookFromShelf(bookId, shelfId);
      res.status(200).json({ message: 'Libro eliminado' });

    } catch (error) {
      res.status(500).send(error.message);
    }
  },


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
