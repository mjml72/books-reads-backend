import { Router } from 'express';
import { UsersController } from '../controllers/users.controller.js';

export const routerUsers = Router();

routerUsers.get('/users', UsersController.findAll);
routerUsers.get('/users/:userId', UsersController.findById);
routerUsers.get('/users/search', UsersController.findByName);
routerUsers.post('/users', UsersController.create);
routerUsers.get('/users/:userId/books', UsersController.getAllUserBooks);
routerUsers.get('/users/:userId/books/:bookId', UsersController.getUserBook);
routerUsers.post('/users/books', UsersController.addToUserBooks);
routerUsers.put('/users/:userId', UsersController.update);
routerUsers.delete('/users/:userId/books/:bookId', UsersController.deleteFromUserBooks);
routerUsers.delete('/users/:id', UsersController.delete);
