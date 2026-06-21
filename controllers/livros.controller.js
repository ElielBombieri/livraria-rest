export default function mostraLivros(req, res) {
    res.status(200).json(livros);
}

const livros = [
    {
        id: 1,
        titulo: "O Hobbit"
    },{
        id: 2,
        titulo: 'Senhor dos anéis'
    }
]