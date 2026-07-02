import express from "express"
import livroController from "../controllers/Livro.controller.js"

const routes = express.Router();

routes.get("/livros", livroController.listarLivros);
routes.post("/livros", livroController.criaLivro)

export default routes;