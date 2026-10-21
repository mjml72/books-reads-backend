import {Router} from 'express';
import {NotesController} from '../controllers/notes.controller.js';
import { checkBookUser } from '../middlewares/checkBookUser.js';

export const routerNotes = Router();

routerNotes.get('/notes/:userId/:bookId', NotesController.findByBookId);
routerNotes.get('/notes/:noteId', NotesController.findById);
routerNotes.post('/notes/:userId/:bookId', checkBookUser, NotesController.create);
routerNotes.put('/notes/:noteId', NotesController.update);
routerNotes.delete('/notes/:noteId', NotesController.delete);
