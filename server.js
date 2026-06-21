import http from "http";

const PORT = 3000;

const server = http.createServer((req, res) => { 
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("livraria-rest") 
})

server.listen(PORT, () => {
    console.log("Servidor rodando na porta 3000.")
})