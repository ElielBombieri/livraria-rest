const livros = [
    {
        id: 1,
        titulo: "O Hobbit"
    },{
        id: 2,
        titulo: 'Senhor dos anéis'
    }
]

function buscaIndex(id) {
    return livros.findIndex(livro => { return livro.id === Number(id); })
}

export function mostraLivros(req, res) {
    res.status(200).json(livros);
}

export function mostraLivroId(req, res) {
    const index = buscaIndex(req.params.id);
    res.status(200).json(livros[index]);
}

export function criaLirvo(req, res) {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso!");

}