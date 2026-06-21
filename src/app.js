import express from 'express';
import hello from '../controllers/hello.controller.js';
import mostraLivros from '../controllers/livros.controller.js';
const app = express();

app.get("/", hello)
app.get("/livros", mostraLivros)


export default app;