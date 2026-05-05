import { Router } from "express";
import { CategoriaController } from "../controllers/categoria.controller";

const categoriaController = new CategoriaController();
const categoriaRoutes =Router();

categoriaRoutes.get('/categorias/alfabetica', categoriaController.selecionaOrdemASC);
categoriaRoutes.post('/categorias', categoriaController.criar);
categoriaRoutes.delete('/categorias', categoriaController.deletar);


export default categoriaRoutes;