import express from 'express';
import cors from 'cors';
import { dbConfiguration } from './src/config/db.js';

const app = express();
app.use(cors());
app.use(express.json());


process.loadEnvFile('./.env');

const PORT = process.env.PORT || 3000;
const db = await dbConfiguration();

app.get('/', async (req, res) => {

  let response = await db.get('SELECT 3');
  console.log(response);

  res.send('API REST con ES Modules funcionando');
});

app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost: ${PORT}`);
});