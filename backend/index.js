import express from 'express';
import cors from 'cors';
import { dbConfiguration } from './src/config/db.js';
import {routerBooks} from './src/routes/books.routes.js';
import {routerWriters} from './src/routes/writers.routes.js';
import {routerShelves} from './src/routes/shelves.routes.js';
import {routerNotes} from './src/routes/notes.routes.js';
import {routerBookStatus} from './src/routes/bookstatus.routes.js';
import {routerBooksShelves} from './src/routes/books-shelves.routes.js';
import {routerBooksWriters} from './src/routes/books-writers.routes.js';

const app = express();
app.use(cors());
app.use(express.json());
process.loadEnvFile('./.env');
const PORT = process.env.PORT || 3000;
app.use('/booksreads', routerBooks);
app.use('/booksreads', routerBookStatus);
app.use('/booksreads', routerWriters);
app.use('/booksreads', routerShelves);
app.use('/booksreads', routerBooksShelves);
app.use('/booksreads', routerNotes);
app.use('/booksreads', routerBooksWriters);


app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost: ${PORT}`);
});