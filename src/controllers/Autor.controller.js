import { autor } from "../models/Autor.model.js";

class autorController {

    static async listarAutores(req, res, next) {
        try {
            const autores = await autor.find({});
            res.status(200).json(autores);

        } catch (erro) {
            next(erro);
        }
    }

    static async listarAutorId(req, res, next) {
        try {
            const id = req.params.id;

            const autorEncontrado = await autor.findById(id);

            if (autorEncontrado !== null) {
                res.status(200).send(autorEncontrado);
            } else {
                res.status(404).send({ message: "ID do autor não localizado." });
            }
        } catch (erro) {
            next(erro);
        }
    }

    static async criarAutor(req, res, next) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(200).json({
                message: "Criado com sucesso!",
                autor: novoAutor
            });
        } catch (erro) {
            next(erro);
        }
    }

    static async alterarAutor(req, res, next) {
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "autor alterado com sucesso!" });
        } catch (erro) {
            next(erro);
        }
    }

    static async removerAutor(req, res, next) {
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({ message: "autor excluido com sucesso!" });
        } catch (erro) {
            next(erro);
        }
    }
}

export default autorController;
