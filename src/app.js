import express from 'express';
import db from './config/db.connect.js';
import routes from './routes/index.js';
//App
const app = express();
//rotas
routes(app);
//Database
db.on("error", (erro) => { console.error("Erro de conexão com o db: ", erro); });
db.once("open", () => { console.log("Conectado ao db com sucesso!"); });

export default app;