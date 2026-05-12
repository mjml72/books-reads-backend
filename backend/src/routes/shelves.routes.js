import {Router} from 'express';
import {Names} from '../middlewares/names.js';
import {ShelvesController} from '../controllers/shelves.controller.js';

export const routerShelves = Router();

routerShelves.get('/shelves',ShelvesController.findAll);
routerShelves.get('/shelves/search', ShelvesController.findByName);
routerShelves.get('/shelves/:id', ShelvesController.findById);
routerShelves.post('/shelves', Names, ShelvesController.create);
routerShelves.put('/shelves/:id', Names, ShelvesController.update);
routerShelves.delete('/shelves/:id', ShelvesController.delete);
