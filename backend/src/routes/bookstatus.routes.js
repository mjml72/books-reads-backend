import {Router} from 'express';
import {Status} from '../middlewares/status.js';
import {BookStatusController} from '../controllers/bookstatus.controller.js';

export const routerBookStatus = Router();

routerBookStatus.get('/bookstatus',BookStatusController.findAll);
routerBookStatus.get('/bookstatus/:id', BookStatusController.findById);
routerBookStatus.post('/bookstatus', Status, BookStatusController.create);
routerBookStatus.put('/bookstatus/:id', Status, BookStatusController.update);
routerBookStatus.delete('/bookstatus/:id', BookStatusController.delete);
