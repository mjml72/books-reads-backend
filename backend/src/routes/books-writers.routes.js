import {Router} from 'express';
import {BooksWritersController} from '../controllers/books-writers.controller.js';

export const routerBooksWriters = Router();

routerBooksWriters.get('/bookswriters',BooksWritersController.findAll);
routerBooksWriters.get('/bookswriters/:bookId', BooksWritersController.findByBookId);
routerBooksWriters.get('/bookswriters/:id', BooksWritersController.findByWriterId);
routerBooksWriters.post('/bookswriters', BooksWritersController.create);
routerBooksWriters.put('/bookswriters', BooksWritersController.update);
routerBooksWriters.delete('/bookswriters/:bookId/:writerId', BooksWritersController.delete);
