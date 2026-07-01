import express from 'express';
import dns from 'node:dns';
dns.setServers(['1.1.1.1', '8.8.8.8']);
import hello from './controllers/hello.controller.js';
import { 
    mostraLivros, criaLirvo, 
    mostraLivroId, alteraLivro,
    removerLivro 
    } from './controllers/livros.controller.js';
import conectarBD from './config/db.connect.js'

const app = express();
app.use(express.json());

const db = await conectarBD();
db.on("error", (erro) => {
    console.error("Erro de conexão com o db: ",erro)
})
db.once("open", ()=>{ console.log("Conectado ao db com sucesso!") })

//hello
app.get("/", hello)

//livros
app.get("/livros", mostraLivros)
app.get("/livros/:id", mostraLivroId)
app.post("/livros", criaLirvo)
app.put("/livros/:id", alteraLivro)
app.delete("/livros/:id", removerLivro)

export default app;