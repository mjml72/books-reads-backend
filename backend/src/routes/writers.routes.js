import {Router} from 'express';
import {Names} from '../middlewares/names.js';
import {WritersController} from '../controllers/writers.controller.js';

export const routerWriters = Router();

routerWriters.get('/writers',WritersController.findAll);
routerWriters.get('/writers/:id', WritersController.findById);
routerWriters.get('/writers/:search', WritersController.findByName);
routerWriters.post('/writers', Names, WritersController.create);
routerWriters.put('/writers/:id', Names, WritersController.update);
routerWriters.delete('/writers/:id', WritersController.delete);
