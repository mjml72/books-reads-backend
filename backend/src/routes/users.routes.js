import { Router } from 'express';
import { UsersController } from '../controllers/users.controller.js';
import { users } from '../middlewares/users.js';
import { verificarToken } from '../middlewares/verificarToken.js';

export const routerUsers = Router();

routerUsers.get('/users', UsersController.findAll);
routerUsers.get('/users/:userId', verificarToken, UsersController.findById);
routerUsers.post('/users/register', users, UsersController.registerUser);
routerUsers.post('/users/login', UsersController.loginUser);
routerUsers.get('/users/:userId/books', UsersController.getAllUserBooks);
routerUsers.get('/users/:userId/books/:bookId', UsersController.getUserBook);
routerUsers.post('/users/books', UsersController.addToUserBooks);
routerUsers.put('/users/:userId', users, verificarToken, UsersController.update);
routerUsers.delete('/users/:userId/books/:bookId', UsersController.deleteFromUserBooks);
routerUsers.delete('/users/:userId', verificarToken, UsersController.delete);
