import "dotenv/config";
import dns from 'node:dns';
dns.setServers(['1.1.1.1', '8.8.8.8']);
const { default: app } = await import("./src/app.js");

const PORT = 3000;

app.listen(PORT, () => { console.log("Servidor rodando na porta 3000."); });