import express from "express";
import livros from "../routes/Livro.routes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Bem vindo(a) a API livraria"));

    app.use(express.json(), livros)
}

export default routes;