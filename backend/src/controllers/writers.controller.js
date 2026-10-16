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
      const { writerId } = req.params;
      const response = await WritersModel.findById(writerId);

      if (!response) {
        return res.status(404).json({ error: 'Writer not found' });
      }
      res.json(response);

    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  findByName: async (req, res) => {
    try {
      const { name } = req.query;
      const response = await WritersModel.findByName(name);

      if (!response) {
        return res.status(404).json({ error: 'Writer not found' });
      }
      res.json(response);

    } catch (error) {
      res.status(500).send(error.message);
    }
  },


  create: async (req, res) => {
    try {
      const { name } = req.body;
      const response = await WritersModel.create(name);
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json({ error: err.message });
    }
  },


  // listar todos los libros del escritor 
  getAllWriterBooks: async (req, res) => {
    try {
      const { writerId } = req.params;
      const response = await WritersModel.getAllWriterBooks(writerId);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error: err.message });
    }
  },

  // buscar escritores del libro   
  getWriterBook: async (res, req) => {
    try {
      const { bookId } = req.params;
      const response = await WritersModel.getWriterBook(bookId);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error: err.message });
    }
  },

  // añadir libro a la lista de libros del escritor
  addToWritersBooks: async (res, req) => {
    try {
      const { writer_id, book_id } = req.body;
      const response = await WritersModel.addToWritersBooks(writer_id, book_id);
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json({ error: err.message });
    }
  },

  // borrar libro a la lista de libros del escritor
  deleteFromWritersBooks: async () => {
    try {
      const { writerId, bookId } = req.params;
      await WritersModel.deleteFromWritersBooks(writerId, bookId);
      res.json({ message: 'Book eliminado' });

    } catch (error) {
      res.status(500).send(error.message);
    }
  },



  update: async (req, res) => {
    try {
      const { writerId } = req.params;
      const { name } = req.body;
      const response = await WritersModel.update(writerId, name);
      res.status(200).json(response);

    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  delete: async (req, res) => {
    try {
      const { writerId } = req.params;
      await WritersModel.delete(writerId);
      res.json({ message: 'Writer eliminado' });

    } catch (error) {
      res.status(500).send(error.message);
    }
  }
};
