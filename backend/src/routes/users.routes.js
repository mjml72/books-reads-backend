import { Router } from 'express';
import { UsersController } from '../controllers/users.controller.js';
import { users } from '../middlewares/users.js';

export const routerUsers = Router();

routerUsers.get('/users', UsersController.findAll);
routerUsers.get('/users/:userId', UsersController.findById);
routerUsers.post('/users', users, UsersController.create);
routerUsers.get('/users/:userId/books', UsersController.getAllUserBooks);
routerUsers.get('/users/:userId/books/:bookId', UsersController.getUserBook);
routerUsers.post('/users/books', UsersController.addToUserBooks);
routerUsers.put('/users/:userId', users, UsersController.update);
routerUsers.delete('/users/:userId/books/:bookId', UsersController.deleteFromUserBooks);
routerUsers.delete('/users/:userId', UsersController.delete);
