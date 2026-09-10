import express from 'express';
import db from './config/db.connect.js';
import routes from './routes/index.js';
import mongoose from 'mongoose';

//Database
db.on("error", (erro) => { console.error("Erro de conexão com o db: ", erro); });
db.once("open", () => { console.log("Conectado ao db com sucesso!"); });

//App
const app = express();
app.use(express.json());
routes(app);

// eslint-disable-next-line no-unused-vars
app.use((erro, req, res, next) => {
    if (erro instanceof mongoose.Error.CastError) {
        res.status(400).send({ message: "Um ou mais dados fornecidos estão incorretos." });
    } else {
        res.status(500).send({ message: `Falha no servidor: ${erro.message}` });
    }
});

export default app;