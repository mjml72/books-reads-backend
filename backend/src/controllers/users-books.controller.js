import {UsersBooksModel} from '../models/users-books.model.js';

export const UsersBooksController = {
    findAll: async (req, res) => {
      try {
        const response = await UsersBooksModel.findAll();
        res.status(200).json(response);
  
      } catch (error) {
        res.status(500).send(error.message);
      }
    },
  
  
    findByUserId: async (req, res) => {
      try {
        const { userId } = req.params;
        const response = await UsersBooksModel.findByUserId(userId);
  
        if (!response) {
          return res.status(404).json({ error: 'User not found' });
        }
        res.json(response);
  
      } catch (error) {
        res.status(500).send(error.message);
      }
    },
  
    findByBookId: async (req, res) => {
      try {
        const { bookId } = req.params;
        const response = await UsersBooksModel.findByWriterId(bookId);
  
        if (!response) {
          return res.status(404).json({ error: 'Book not found' });
        }
        res.json(response);
  
      } catch (error) {
        res.status(500).send(error.message);
      }
    },
  
  
    findByIds: async (req, res) => {
      try {
        const { userId, bookId } = req.params;
        const response = await UsersBooksModel.findByIds(userId, bookId);
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
        const { userId, bookId } = req.body;
        const response = await UsersBooksModel.create(userId, bookId);
        res.status(201).json(response);
      } catch (error) {
        res.status(500).json({ error: err.message });
      }
    },
  
  
    delete: async (req, res) => {
      try {
        const { userId, bookId } = req.params;
        await UsersBooksModel.delete(userId, bookId);
        res.json({ message: 'Relacion eliminado' });
  
      } catch (error) {
        res.status(500).send(error.message);
      }
    }
  
}