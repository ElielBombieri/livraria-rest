import mongoose from "mongoose";


// eslint-disable-next-line no-unused-vars
function manipuladorDeErros(erro, req, res, next) {
    if (erro instanceof mongoose.Error.CastError) {
        res.status(400).send({ message: "Um ou mais dados fornecidos estão incorretos." });
    } else if (erro instanceof mongoose.Error.ValidationError) {
        const menssagemErro = Object.values(erro.errors).map(erro => erro.message).join("; ");

        res.status(400).send({ message: `Erro(s) de validação: ${menssagemErro}` });
    } else {
        res.status(500).send({ message: `Falha no servidor: ${erro.message}` });
    }
}

export default manipuladorDeErros;