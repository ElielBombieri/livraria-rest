import ReqIncorreta from "./ReqIncorreta.js";

class ErroValidacao extends ReqIncorreta {
    constructor(erro) {
        const menssagemErro = Object.values(erro.errors).map(erro => erro.message).join("; ");
        super(`Erro(s) de validação: ${menssagemErro}`);
    }
}

export default ErroValidacao;