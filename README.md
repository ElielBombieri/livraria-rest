# Livraria REST API

Uma API REST moderna e eficiente para gerenciamento de livros. Construída com Node.js, Express e MongoDB.

## Sobre o Projeto

A Livraria REST API é uma aplicação backend robusta que fornece endpoints para operações CRUD completas (Create, Read, Update, Delete) de livros. Ideal para plataformas de bibliotecas digitais, lojas de livros online ou sistemas de catalogação.

## Funcionalidades

- Listar todos os livros
- Buscar livro por ID
- Criar novo livro
- Atualizar informações do livro
- Deletar livro
- Tratamento robusto de erros
- Validação de dados

## Tecnologias

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **MongoDB** - Banco de dados NoSQL
- **Mongoose** - ODM para MongoDB
- **ES6 Modules** - Modularização moderna

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- Node.js (v14 ou superior)
- npm ou yarn
- MongoDB (local ou Atlas)

## Instalação

1. Clone o repositório
```bash
git clone <seu-repositorio>
cd livraria-rest
```

2. Instale as dependências
```bash
npm install
```

3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/livraria
NODE_ENV=development
```

4. Inicie o servidor
```bash
npm run dev
```

O servidor estará rodando em `http://localhost:3000`

## Endpoints

### Listar todos os livros
```http
GET /livros
```
**Resposta (200):**
```json
[
  {
    "_id": "123456",
    "titulo": "Clean Code",
    "autor": "Robert C. Martin",
    "ano": 2008
  }
]
```

### Buscar livro por ID
```http
GET /livros/:id
```
**Parâmetros:**
- `id` (string) - ID do livro no MongoDB

**Resposta (200):**
```json
{
  "_id": "123456",
  "titulo": "Clean Code",
  "autor": "Robert C. Martin",
  "ano": 2008
}
```

### Criar novo livro
```http
POST /livros
Content-Type: application/json

{
  "titulo": "Clean Code",
  "autor": "Robert C. Martin",
  "ano": 2008
}
```

**Resposta (200):**
```json
{
  "message": "Criado com sucesso!",
  "livro": {
    "_id": "123456",
    "titulo": "Clean Code",
    "autor": "Robert C. Martin",
    "ano": 2008
  }
}
```

### Atualizar livro
```http
PUT /livros/:id
Content-Type: application/json

{
  "titulo": "Clean Code - 2ª edição",
  "autor": "Robert C. Martin",
  "ano": 2008
}
```

**Resposta (200):**
```json
{
  "message": "Livro alterado com sucesso!"
}
```

### Deletar livro
```http
DELETE /livros/:id
```

**Resposta (200):**
```json
{
  "message": "Livro excluído com sucesso!"
}
```

## Estrutura do Projeto

```
livraria-rest/
├── src/
│   ├── config/
│   │   └── db.connect.js       # Configuração do MongoDB
│   ├── controllers/
│   │   └── Livro.controller.js # Controller de livros
│   ├── models/
│   │   └── Livro.model.js      # Schema do Mongoose
│   ├── routes/
│   │   ├── index.js            # Rotas principais
│   │   └── Livro.routes.js     # Rotas de livros
│   └── app.js                  # Configuração da aplicação
├── models/                      # Modelos adicionais
├── package.json
├── server.js                   # Entrada da aplicação
└── README.md
```

## Scripts Disponíveis

```bash
# Iniciar servidor em modo desenvolvimento (com auto-reload)
npm run dev

# Iniciar servidor em produção
npm start
```

## Tratamento de Erros

A API retorna mensagens de erro estruturadas:

```json
{
  "message": "Falha na listagem dos livros: erro específico"
}
```

Todos os erros retornam status HTTP 500 com detalhes da exceção.

## Exemplo de Uso

### Usando cURL

```bash
# Listar todos os livros
curl http://localhost:3000/livros

# Criar novo livro
curl -X POST http://localhost:3000/livros \
  -H "Content-Type: application/json" \
  -d '{"titulo":"1984","autor":"George Orwell","ano":1949}'

# Buscar livro específico
curl http://localhost:3000/livros/123456

# Atualizar livro
curl -X PUT http://localhost:3000/livros/123456 \
  -H "Content-Type: application/json" \
  -d '{"titulo":"1984 - Edição Especial"}'

# Deletar livro
curl -X DELETE http://localhost:3000/livros/123456
```

## Boas Práticas

- Valide sempre os dados de entrada
- Use variáveis de ambiente para configurações sensíveis
- Implemente autenticação em produção
- Adicione rate limiting para evitar abuso
- Mantenha logs detalhados de operações
- Realize testes unitários regularmente

## Modelo de Dados (Livro)

```javascript
{
  _id: ObjectId,
  titulo: String,
  autor: String,
  ano: Number,
  // Adicione mais campos conforme necessário
}
```

## Deploy

Para fazer deploy da aplicação:

1. Configure as variáveis de ambiente no seu hosting
2. Certifique-se de que o MongoDB está acessível
3. Execute `npm install` e `npm start`
4. Configure um reverse proxy (nginx/Apache) se necessário

## Suporte

Se encontrar algum problema:

1. Verifique se o MongoDB está rodando
2. Confirme se as variáveis de ambiente estão configuradas
3. Verifique os logs do servidor
4. Abra uma issue no repositório

## Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## Autor

Desenvolvido com profissionalismo e dedicação.

---

Última atualização: 2026
