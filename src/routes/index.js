import express from "express";
import livros from "./Livro.routes.js";
import autores from "./Autor.routes.js"

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Bem vindo(a) a API livraria"));

    app.use(express.json(), livros)
    app.use(express.json(), autores)
}

export default routes;