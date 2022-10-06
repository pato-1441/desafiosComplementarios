const express = require('express');

const {Router} = express;

const app = express();
const PORT = 8080;

const router = Router();

router.get('/',(req,res)=>{
    res.send('Este es nuestro home.')
});

router.post('/',(req,res)=>{
    console.log('Probando el postt');
    res.send('Todo ok manito')
});

app.use('/',router);

const server = app.listen(PORT,()=>console.log(`Servidor escuchando en puerto: ${PORT}`));