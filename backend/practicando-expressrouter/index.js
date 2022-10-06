const express = require('express')
const app = express();
const PORT = 8080;
const server = app.listen(PORT,()=>console.log(`Servidor escuchando en puerto: ${PORT}`));
server.on('error',(err)=>console.log(`Error: ${err}`));
app.use(express.json());

const routerMascotas = require('./routes/mascotas.js');
const routerPersonas = require('./routes/personas.js');

app.use('/mascotas',routerMascotas);
//app.use('/personas',routerPersonas);