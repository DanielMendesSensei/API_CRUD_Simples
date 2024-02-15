import { Router } from "express";
import { homeController } from "../controllers/Home.controllers.js";
import { Pessoa } from "../controllers/Pessoa.controllers.js";
const homeRoutes = Router();

homeRoutes.get('/', homeController.home)
homeRoutes.get('/pessoa', Pessoa.getPessoa)
homeRoutes.get('/pessoas', Pessoa.getPessoas)
homeRoutes.post('/pessoa', Pessoa.cadPessoa)
homeRoutes.patch('/pessoa', Pessoa.atuPessoa)
homeRoutes.delete('/pessoa/:id', Pessoa.delPessoa)

export { homeRoutes }