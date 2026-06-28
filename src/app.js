import express from 'express';
import hello from '../controllers/hello.controller.js';
import { 
    mostraLivros, criaLirvo, 
    mostraLivroId, alteraLivro,
    removerLivro 
    } from '../controllers/livros.controller.js';

const app = express();
app.use(express.json());

app.get("/", hello)

//livros
app.get("/livros", mostraLivros)
app.get("/livros/:id", mostraLivroId)
app.post("/livros", criaLirvo)
app.put("/livros/:id", alteraLivro)
app.delete("/livros/:id", removerLivro)

export default app;