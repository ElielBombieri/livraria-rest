import express from "express"
import livroController from "../controllers/Livro.controller.js"

const routes = express.Router();

routes.get("/livros", livroController.listarLivros);
routes.get("/livros/busca", livroController.listarLivrosPorEditora);
routes.get("/livros/:id", livroController.listarLivroId);
routes.post("/livros", livroController.criarLivro);
routes.put("/livros/:id", livroController.alterarLivro);
routes.delete("/livros/:id", livroController.removerLivro);

export default routes;