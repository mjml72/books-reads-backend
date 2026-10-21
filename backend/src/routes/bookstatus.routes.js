import { Router } from 'express';
import { status } from '../middlewares/status.js';
import { checkBookUser } from '../middlewares/checkBookUser.js';
import { BookStatusController } from '../controllers/bookstatus.controller.js';

export const routerBookStatus = Router();


routerBookStatus.get('/bookstatus/:userId/:bookId', BookStatusController.findById);
routerBookStatus.post('/bookstatus/:userId/:bookId', status, checkBookUser, BookStatusController.create);
routerBookStatus.put('/bookstatus/:userId/:bookId', status, BookStatusController.update);
routerBookStatus.delete('/bookstatus/:userId/:bookId', BookStatusController.delete);
