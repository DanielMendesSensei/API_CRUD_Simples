import { Router } from "express";
import { homeController } from "../controllers/Home.controllers.js";
import { getPessoaInfo } from "../controllers/Pessoa.controllers.js";
const homeRoutes = Router();

homeRoutes.get('/', homeController.home)
homeRoutes.post('/pessoa', getPessoaInfo.pessoa)
// homeRoutes.post('/pessoa', (req, res)=>{
//     req.
// })

export { homeRoutes }