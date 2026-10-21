import { Router } from 'express';
import { ShelvesController } from '../controllers/shelves.controller.js';
import { shelves } from '../middlewares/shelves.js';

export const routerShelves = Router();

routerShelves.get('/shelves/:userId/:shelfId/books', ShelvesController.getAllBooksFromShelf);
routerShelves.get('/shelves/:userId/books/:bookId', ShelvesController.getAllShelvesFromBook);
routerShelves.get('/shelves/:userId', ShelvesController.findAll);
routerShelves.get('/shelves/:userId/:shelfId', ShelvesController.findById);
routerShelves.post('/shelves', shelves, ShelvesController.create);
routerShelves.post('/shelves/books/:userId', ShelvesController.addBookToShelf);
routerShelves.put('/shelves/:shelfId', shelves, ShelvesController.update);
routerShelves.delete('/shelves/:shelfId/books/:bookId', ShelvesController.deleteBookFromShelf);
routerShelves.delete('/shelves/:shelfId/:userId', ShelvesController.delete);
