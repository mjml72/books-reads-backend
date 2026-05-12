import {Router} from 'express';
import {BooksShelvesController} from '../controllers/books-shelves.controller.js';

export const routerBooksShelves = Router();

routerBooksShelves.get('/books-shelves',BooksShelvesController.findAll);
routerBooksShelves.get('/books-shelves/book/:bookId', BooksShelvesController.findByBookId);
routerBooksShelves.get('/books-shelves/shelve/:shelvesId', BooksShelvesController.findByShelveId);
routerBooksShelves.get('/books-shelves/:bookId/:shelvesId', BooksShelvesController.findByIds);
routerBooksShelves.post('/books-shelves', BooksShelvesController.create);
routerBooksShelves.delete('/books-shelves/:bookId/:shelvesId', BooksShelvesController.delete);
