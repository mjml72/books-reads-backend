import { WritersModel } from '../models/writers.model.js';


export const WritersController = {
  findAll: async (req, res) => {
    try {
      const { name } = req.query;
      let response;

      if (name) {
        response = await WritersModel.findByName(name);

      } else {
        response = await WritersModel.findAll();

      }

      if (!response) {
        return res.status(404).json({ error: 'Writer not found' });
      }

      return res.status(200).json(response);

    } catch (error) {
      return res.status(500).send(error.message);
    }
  },


  findById: async (req, res) => {
    try {
      const { writerId } = req.params;
      const response = await WritersModel.findById(writerId);

      if (!response) {
        return res.status(404).json({ error: 'Writer not found' });
      }
      return res.status(200).json(response);

    } catch (error) {
      return res.status(500).send(error.message);
    }
  },


  create: async (req, res) => {
    try {
      const { name } = req.body;
      const response = await WritersModel.create(name);
      return res.status(201).json(response);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },


  // listar todos los libros del escritor 
  getAllWriterBooks: async (req, res) => {
    try {
      const { writerId } = req.params;
      const response = await WritersModel.getAllWriterBooks(writerId);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  // buscar escritores del libro   
  getWriterBook: async (req, res) => {
    try {
      const { bookId } = req.params;
      const response = await WritersModel.getWriterBook(bookId);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  // añadir libro a la lista de libros del escritor
  addToWritersBooks: async (req, res) => {
    try {
      const { writer_id, book_id } = req.body;
      const response = await WritersModel.addToWritersBooks(writer_id, book_id);
      return res.status(201).json(response);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  // borrar libro a la lista de libros del escritor
  deleteFromWritersBooks: async (req, res) => {
    try {
      const { writerId, bookId } = req.params;
      await WritersModel.deleteFromWritersBooks(writerId, bookId);
      return res.status(200).json({ message: 'Book eliminado' });

    } catch (error) {
      return res.status(500).send(error.message);
    }
  },



  update: async (req, res) => {
    try {
      const { writerId } = req.params;
      const { name } = req.body;
      const response = await WritersModel.update(writerId, name);
      return res.status(200).json(response);

    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  delete: async (req, res) => {
    try {
      const { writerId } = req.params;
      await WritersModel.delete(writerId);
      return res.status(200).json({ message: 'Writer eliminado' });

    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
};
