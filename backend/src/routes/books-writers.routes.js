import {Router} from 'express';
import {BooksWritersController} from '../controllers/books-writers.controller.js';

export const routerBooksWriters = Router();

routerBooksWriters.get('/books-writers',BooksWritersController.findAll);
routerBooksWriters.get('/books-writers/book/:bookId', BooksWritersController.findByBookId);
routerBooksWriters.get('/books-writers/writer/:writerId', BooksWritersController.findByWriterId);
routerBooksWriters.get('/books-writers/:bookId/:writerId', BooksWritersController.findByIds);
routerBooksWriters.post('/books-writers', BooksWritersController.create);
routerBooksWriters.delete('/books-writers/:bookId/:writerId', BooksWritersController.delete);
