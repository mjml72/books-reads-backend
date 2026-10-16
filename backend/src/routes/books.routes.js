import {Router} from 'express';
import {Title} from '../middlewares/booktitle.js';
import {BooksController} from '../controllers/books.controller.js';

export const routerBooks = Router();

routerBooks.get('/books',BooksController.findAll);
routerBooks.get('/books/:bookId', BooksController.findById);
routerBooks.get('/books/search', BooksController.findByTitle);
routerBooks.post('/books', Title, BooksController.create);
routerBooks.put('/books/:bookId', Title, BooksController.update);
routerBooks.delete('/books/:bookId', BooksController.delete);
