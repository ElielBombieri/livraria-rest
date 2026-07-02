import express from 'express';
import dns from 'node:dns';
dns.setServers(['1.1.1.1', '8.8.8.8']);
import conectarBD from './config/db.connect.js'
import routes from './routes/index.js';
//App
const app = express();
//rotas
routes(app);
//Database
const db = await conectarBD();
db.on("error", (erro) => { console.error("Erro de conexão com o db: ",erro) });
db.once("open", ()=>{ console.log("Conectado ao db com sucesso!") });

export default app;