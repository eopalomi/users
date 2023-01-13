const express = require('express');
const app = express();
const port = 5100;

// Para usar el Body
app.use(express.json());

// Importar Rutas
app.use('/user_service', require('./route/routes'))

// Correr aplicación
app.listen(port, () => {
    console.log("Server is running in port: ", port)
})