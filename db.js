const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Conexión a MongoDB
        await mongoose.connect('mongodb://localhost:27017/popcorn-gym');
        console.log('Conectado a MongoDB');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
        process.exit(1); // Salir del proceso con error
    }
}

module.exports = connectDB;