import {Router} from 'express';
import {Status} from '../middlewares/status.js';
import {BookStatusController} from '../controllers/bookstatus.controller.js';

export const routerBookStatus = Router();


routerBookStatus.get('/bookstatus/:userId/:bookId', BookStatusController.findById);
routerBookStatus.post('/bookstatus', Status, BookStatusController.create);
routerBookStatus.put('/bookstatus/:userId/:bookId', Status, BookStatusController.update);
routerBookStatus.delete('/bookstatus/:userId/:bookId', BookStatusController.delete);
