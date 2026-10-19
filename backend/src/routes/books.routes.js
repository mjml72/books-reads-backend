import { Router } from 'express';
import { title } from '../middlewares/booktitle.js';
import { BooksController } from '../controllers/books.controller.js';

export const routerBooks = Router();

routerBooks.get('/books', BooksController.findAll);
routerBooks.get('/books/:bookId', BooksController.findById);
routerBooks.post('/books', title, BooksController.create);
routerBooks.put('/books/:bookId', title, BooksController.update);
routerBooks.delete('/books/:bookId', BooksController.delete);
