import {Router} from 'express';
import {NotesController} from '../controllers/notes.controller.js';

export const routerNotes = Router();

routerNotes.get('/notes/:bookId/:userId', NotesController.findByBookId);
routerNotes.get('/notes/:noteId', NotesController.findById);
routerNotes.post('/notes', NotesController.create);
routerNotes.put('/notes/:noteId', NotesController.update);
routerNotes.delete('/notes/:noteId', NotesController.delete);
