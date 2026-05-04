import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('API REST con ES Modules funcionando');
});

app.listen(PORT, ()=>{
  console.log(`Servidor activo en http://localhost: ${PORT}`);
});