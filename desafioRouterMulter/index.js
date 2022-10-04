const express = require('express');

const {Router} = express;

const router = Router();

const app = express();

const PORT = 8080;
const server = app.listen(PORT, ()=> console.log(`Server listening on port: ${PORT}`));
server.on('error',(err)=>console.log(`Error: ${err}`));

app.use(express.json());

app.use('/mascotas', routerMascotas);
app.use('/personas', routerPersonas);