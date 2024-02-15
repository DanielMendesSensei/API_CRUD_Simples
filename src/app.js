import express from 'express';
import { homeRoutes } from './routes/home.routes.js';
import { createTable } from './controllers/Pessoa.controllers.js';
const app = express();
const port = 3000;

createTable();

app.use(express.json());
app.use(homeRoutes)

app.listen(port, ()=> console.log(`API RODANDO EM http://localhost:${port}`));
