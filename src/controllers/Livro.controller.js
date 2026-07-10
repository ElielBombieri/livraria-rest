import livro from "../models/Livro.model.js"
import { autor } from "../models/Autor.model.js";

class livroController {

    static async listarLivros(req, res) {
        try {
            const livros = await livro.find({});
            res.status(200).json(livros);

        } catch(erro) {
            res.status(500).json({ message: `Falha na listagem dos livros: ${erro.message}` })
        }
    }

    static async listarLivroId(req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch(erro) {
            res.status(500).json({ message: `Falha na listagem dos livros: ${erro.message}` })
        }
    }
    
    static async criarLivro(req, res) {
        const novoLivro = req.body

        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado } }
            
            const livroCriado = await livro.create(livroCompleto);
            res.status(200).json({
                message: "Criado com sucesso!",
                livro: livroCriado
            });
        } catch(erro) {
            res.status(500).json({
                message: `Erro ao cadastrar livro: ${erro.message}`
            })
        }
    }
    
    static async alterarLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Livro alterado com sucesso!" });
        } catch(erro) {
            res.status(500).json({ message: `Falha na alteração do livro: ${erro.message}` })
        }
    }
    
    static async removerLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({ message: "Livro excluido com sucesso!" });
        } catch(erro) {
            res.status(500).json({ message: `Falha na exclusão do livro: ${erro.message}` })
        }
    }
}

export default livroController;