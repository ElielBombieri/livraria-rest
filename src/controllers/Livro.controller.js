import livro from "../models/Livro.model.js"

class livroController {

    static async listarLivros(req, res) {
        const livros = await livro.find({});
        res.status(200).json(livros);
    }

    static async listarLivroId(req, res) {
        const index = buscaIndex(req.params.id);
        res.status(200).json(livros[index]);
    }
    
    static async criaLivro(req, res) {
        try {
            const novoLivro = await livro.create(req.body)
            res.status(201).json({
                message: "Criado com sucesso!",
                livro: novoLivro
            });
        } catch(erro) {
            res.status(500).json({
                message: `Erro ao cadastrar livro: ${erro.message}`
            })
        }
    }
    
    static async alteraLivro(req, res) {
        const index = buscaIndex(req.params.id);
        livros[index].titulo = req.body.titulo;
        res.status(200).json(livros[index]);   
    }
    
    static async removerLivro(req, res) {
        const index = buscaIndex(req.params.id);
        livros.splice(index, 1);
        res.status(200).send("Elemento removido com sucesso!")
    }
}






export default livroController;