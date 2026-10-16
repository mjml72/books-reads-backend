import { Router } from 'express';
import { Names } from '../middlewares/names.js';
import { WritersController } from '../controllers/writers.controller.js';

export const routerWriters = Router();

routerWriters.get('/writers', WritersController.findAll);
routerWriters.get('/writers/:writerId', WritersController.findById);
routerWriters.get('/writers/search', WritersController.findByName);
routerWriters.post('/writers', Names, WritersController.create);
routerWriters.get('/writers/:writerId/books', WritersController.getAllWriterBooks);
routerWriters.get('/books/:bookId/writers', WritersController.getWriterBook);
routerWriters.post('/writers/books', WritersController.addToWritersBooks);
routerWriters.put('/writers/:writerId', Names, WritersController.update);
routerWriters.delete('/writers/:writerId/books/:bookId', WritersController.deleteFromWritersBooks);
routerWriters.delete('/writers/:writerId', WritersController.delete);
