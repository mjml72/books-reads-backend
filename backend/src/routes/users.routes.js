import {Router} from 'express';
import {UsersController} from '../controllers/users.controller.js';

export const routerUsers = Router();

routerUsers.get('/users',UsersControllers.findAll);
routerUsers.get('/users/search', UsersControllers.findByName);
routerUsers.get('/users/:id', UsersControllers.findById);
routerUsers.post('/users', UsersControllers.create);
routerUsers.put('/users/:id', UsersControllers.update);
routerUsers.delete('/users/:id', UsersControllers.delete);
