import mongoose from "mongoose";
import ErroBase from "../Erros/ErroBase.js";
import ReqIncorreta from "../Erros/ReqIncorreta.js";
import ErroValidacao from "../Erros/ErroValidacao.js";


// eslint-disable-next-line no-unused-vars
function manipuladorDeErros(erro, req, res, next) {
    if (erro instanceof mongoose.Error.CastError) {
        new ReqIncorreta().enviarResposta(res);
    } else if (erro instanceof mongoose.Error.ValidationError) {
        new ErroValidacao(erro).enviarResposta(res);
    } else {
        new ErroBase(erro).enviarResposta(res);
    }
}

export default manipuladorDeErros;
