import { autor } from "../models/Autor.model.js";

class autorController {

    static async listarAutores(req, res) {
        try {
            const autores = await autor.find({});
            res.status(200).json(autores);

        } catch(erro) {
            res.status(500).json({ message: `Falha na listagem dos autores: ${erro.message}` })
        }
    }

    static async listarAutorId(req, res) {
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);
        } catch(erro) {
            res.status(500).json({ message: `Falha na listagem dos autores: ${erro.message}` })
        }
    }
    
    static async criarAutor(req, res) {
        const novoAutor = await autor.create(req.body)
        try {
            res.status(200).json({
                message: "Criado com sucesso!",
                autor: novoAutor
            });
        } catch(erro) {
            res.status(500).json({
                message: `Erro ao cadastrar autor: ${erro.message}`
            })
        }
    }
    
    static async alterarAutor(req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "autor alterado com sucesso!" });
        } catch(erro) {
            res.status(500).json({ message: `Falha na alteração do autor: ${erro.message}` })
        }
    }
    
    static async removerAutor(req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({ message: "autor excluido com sucesso!" });
        } catch(erro) {
            res.status(500).json({ message: `Falha na exclusão do autor: ${erro.message}` })
        }
    }
}

export default autorController;