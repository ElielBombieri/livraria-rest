import livros from "../models/Livro.model.js";

class livroController {

    static async listarLivros(req, res, next) {
        try {
            const livrosEncontrados = await livros.find({});
            res.status(200).json(livrosEncontrados);

        } catch (erro) {
            next(erro);
        }
    }

    static async listarLivroId(req, res, next) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livros.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (erro) {
            next(erro);
        }
    }

    static async criarLivro(req, res, next) {
        try {
            let livro = new livros(req.body);

            const livroResultado = await livro.save();

            res.status(201).send(livroResultado.toJSON());
        } catch (erro) {
            next(erro);
        }
    }

    static async alterarLivro(req, res, next) {
        try {
            const id = req.params.id;

            await livros.findByIdAndUpdate(id, { $set: req.body });

            res.status(200).send({ message: "Livro atualizado com sucesso" });
        } catch (erro) {
            next(erro);
        }
    }

    static async removerLivro(req, res, next) {
        try {
            const id = req.params.id;
            await livros.findByIdAndDelete(id);
            res.status(200).json({ message: "Livro excluido com sucesso!" });
        } catch (erro) {
            next(erro);
        }
    }

    static async listarLivrosPorEditora(req, res, next) {
        const editora = req.query.editora;

        try {
            const livros = await livros.find({ editora });
            res.status(200).json(livros);
        } catch (erro) {
            next(erro);
        }

    }
}

export default livroController;
