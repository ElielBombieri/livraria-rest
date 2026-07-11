# Livraria REST API

API REST desenvolvida em Node.js com Express e MongoDB para gerenciar livros e autores em uma livraria.

## Sobre o projeto

Esta aplicação foi criada para praticar e consolidar conceitos de desenvolvimento backend com JavaScript, incluindo:

- criação de uma API REST;
- conexão com banco de dados MongoDB;
- uso de Mongoose para modelagem de dados;
- organização em camadas com rotas, controllers e models;
- operações CRUD para livros e autores.

## Tecnologias utilizadas

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- ES modules

## Funcionalidades

- Listar todos os livros
- Buscar um livro por ID
- Criar um novo livro
- Atualizar um livro existente
- Excluir um livro
- Buscar livros por editora
- Gerenciar autores com operações CRUD

## Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

- Node.js (versão 18 ou superior é recomendada)
- npm
- MongoDB rodando localmente ou em um serviço como MongoDB Atlas

## Instalação

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd livraria-rest
```

2. Instale as dependências:

```bash
npm install
```

3. Crie um arquivo `.env` na raiz do projeto com a seguinte variável:

```env
MONGODB_URI=mongodb://localhost:27017/livraria
```

4. Inicie o servidor:

```bash
npm run dev
```

A API ficará disponível em:

```text
http://localhost:3000
```

## Estrutura do projeto

```text
livraria-rest/
├── src/
│   ├── app.js
│   ├── config/
│   │   └── db.connect.js
│   ├── controllers/
│   │   ├── Autor.controller.js
│   │   └── Livro.controller.js
│   ├── models/
│   │   ├── Autor.model.js
│   │   └── Livro.model.js
│   └── routes/
│       ├── Autor.routes.js
│       ├── Livro.routes.js
│       └── index.js
├── server.js
├── package.json
└── README.md
```

## Endpoints

### Rotas de livros

- `GET /livros` — lista todos os livros
- `GET /livros/:id` — busca um livro por ID
- `GET /livros/busca?editora=...` — filtra livros por editora
- `POST /livros` — cria um novo livro
- `PUT /livros/:id` — atualiza um livro
- `DELETE /livros/:id` — remove um livro

### Rotas de autores

- `GET /autores` — lista todos os autores
- `GET /autores/:id` — busca um autor por ID
- `POST /autores` — cria um novo autor
- `PUT /autores/:id` — atualiza um autor
- `DELETE /autores/:id` — remove um autor

## Exemplo de uso

### Criar um livro

```bash
curl -X POST http://localhost:3000/livros \
  -H "Content-Type: application/json" \
  -d '{
    "titulo": "Clean Code",
    "editora": "Alta Books",
    "preco": 89.9,
    "paginas": 464,
    "autor": "64f1a2b3c4d5e6f7a8b9c0d"
  }'
```

### Listar todos os livros

```bash
curl http://localhost:3000/livros
```

## Observações

- A aplicação está em uma fase inicial e pode ser expandida com validações mais robustas, autenticação, testes automatizados e documentação com Swagger.
- O projeto também pode servir como base para uma aplicação mais completa de e-commerce ou catálogo de livros.

## Próximos passos sugeridos

- adicionar validação de dados nas entradas;
- implementar tratamento de erros mais detalhado com status HTTP corretos;
- criar testes automatizados;
- adicionar autenticação e autorização;
- documentar a API com Swagger/OpenAPI.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## Autor

Desenvolvido com profissionalismo e dedicação.

---

Última atualização: 2026
