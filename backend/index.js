import express from 'express';
import cors from 'cors';

import {routerBooks} from './src/routes/books.routes.js';
import {routerWriters} from './src/routes/writers.routes.js';
import {routerShelves} from './src/routes/shelves.routes.js';
import {routerNotes} from './src/routes/notes.routes.js';
import {routerBookStatus} from './src/routes/bookstatus.routes.js';
import { routerUsers } from './src/routes/users.routes.js';

const app = express();
app.use(cors());
app.use(express.json());
process.loadEnvFile('./.env');
const PORT = process.env.PORT || 3000;
app.use('/booksreads/api/', routerBooks);
app.use('/booksreads/api/', routerBookStatus);
app.use('/booksreads/api/', routerShelves);
app.use('/booksreads/api/', routerNotes);
app.use('/booksreads/api/', routerUsers)
app.use('/booksreads/api/', routerWriters);


app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost: ${PORT}`);
});