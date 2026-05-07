import {Router} from 'express';
import {NotesController} from '../controllers/notes.controller.js';

export const routerNotes = Router();

routerNotes.get('/notes',NotesController.findAll);
routerNotes.get('/notes/:id', NotesController.findById);
routerNotes.get('/notes/:bookId', NotesController.findByBookId);
routerNotes.post('/notes', NotesController.create);
routerNotes.put('/notes/:id', NotesController.update);
routerNotes.delete('/notes/:id', NotesController.delete);
