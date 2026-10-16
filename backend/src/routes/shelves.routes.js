import {Router} from 'express';
import {Names} from '../middlewares/names.js';
import {ShelvesController} from '../controllers/shelves.controller.js';

export const routerShelves = Router();

routerShelves.get('/shelves/:userId',ShelvesController.findAll);
routerShelves.get('/shelves/:userId/:shelfId', ShelvesController.findById);
routerShelves.get('/shelves/:userId/search', ShelvesController.findByName);
routerShelves.post('/shelves', Names, ShelvesController.create);
routerShelves.get('/shelves/:shelfId/books', ShelvesController.getAllBooksFromShelf);
routerShelves.get('/shelves/:userId/books/:bookId', ShelvesController.getAllShelvesFromBook);
routerShelves.post('/shelves/books', ShelvesController.addBookToShelf);
routerShelves.put('/shelves/:shelfId', Names, ShelvesController.update);
routerShelves.delete('/shelves/:shelfId/books/:bookId', ShelvesController.deleteBookFromShelf);
routerShelves.delete('/shelves/:shelfId/:userId', ShelvesController.delete);
