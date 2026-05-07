import {Router} from 'express';
import {Title} from '../middlewares/booktitle.js';
import {BooksController} from '../controllers/books.controller.js';

export const routerBooks = Router();

routerBooks.get('/books',BooksController.findAll);
routerBooks.get('/books/:id', BooksController.findById);
routerBooks.get('/books/:title', BooksController.findByTitle);
routerBooks.post('/books', Title, BooksController.create);
routerBooks.put('/books/:id', Title, BooksController.update);
routerBooks.delete('/books/:id', BooksController.delete);
