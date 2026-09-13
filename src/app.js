import express from 'express';
import db from './config/db.connect.js';
import routes from './routes/index.js';
import manipuladorDeErros from './middlewares/manipuladorDeErros.js';

//Database
db.on("error", (erro) => { console.error("Erro de conexão com o db: ", erro); });
db.once("open", () => { console.log("Conectado ao db com sucesso!"); });

//App
const app = express();
app.use(express.json());
routes(app);

// eslint-disable-next-line no-unused-vars
app.use(manipuladorDeErros);

export default app;