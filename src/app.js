import express from 'express';

const app = express();

function helloRest(req, res) {
    res.status(200).send('Bem vindo à API Rest Livraria')
}
app.get("/", helloRest)

export default app;