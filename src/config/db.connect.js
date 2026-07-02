import mongoose from "mongoose";

async function conectarBD() {
    mongoose.connect(process.env.MONGODB_URI);
    return mongoose.connection;
}

export default conectarBD;