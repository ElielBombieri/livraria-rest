import express from "express"
import autorController from "../controllers/Autor.controller.js"

const routes = express.Router();

routes.get("/autores", autorController.listarAutores);
routes.get("/autores/:id", autorController.listarAutorId);
routes.post("/autores", autorController.criarAutor);
routes.put("/autores/:id", autorController.alterarAutor);
routes.delete("/autores/:id", autorController.removerAutor);

export default routes;