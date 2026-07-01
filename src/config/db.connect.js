import mongoose from "mongoose";

async function conectarBD() {
    mongoose.connect("mongodb+srv://Eliel:1234@cluster0.e8ms4mw.mongodb.net/livraria?appName=Cluster0");
    return mongoose.connection;
}

export default conectarBD;