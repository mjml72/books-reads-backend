import {Router} from 'express';
import {UsersBooksController} from '../controllers/users-books.controller.js';

export const routerUsersBooks = Router();

routerUsersBooks.get('/users-books',UsersBooksController.findAll);
routerUsersBooks.get('/users-books/user/:userId', UsersBooksController.findByBookId);
routerUsersBooks.get('/users-books/book/:bookId', UsersBooksController.findByWriterId);
routerUsersBooks.get('/users-books/:userId/:bookId', UsersBooksController.findByIds);
routerUsersBooks.post('/users-books', UsersBooksController.create);
routerUsersBooks.delete('/users-books/:userId/:bookId', UsersBooksController.delete);
