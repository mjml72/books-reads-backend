import {Router} from 'express';
import {BooksShelvesController} from '../controllers/books-shelves.controller.js';

export const routerBooksShelves = Router();

routerBooksShelves.get('/booksshelves',BooksShelvesController.findAll);
routerBooksShelves.get('/booksshelves/:bookId', BooksShelvesController.findByBookId);
routerBooksShelves.get('/booksshelves/:id', BooksShelvesController.findByShelveId);
routerBooksShelves.post('/booksshelves', BooksShelvesController.create);
routerBooksShelves.put('/booksshelves', BooksShelvesController.update);
routerBooksShelves.delete('/booksshelves/:bookId/:shelvesId', BooksShelvesController.delete);
