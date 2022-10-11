const express = require('express');
const app = express();
const PORT = 3030;
const server = app.listen(PORT,()=>console.log(`Servidor escuchando en puerto: ${PORT}`));
server.on('error',(err)=>console.log(`Error: ${err}`));
app.use(express.json());

const {Router} = express;
const router = Router();

const Contenedor = require('./Contenedor');
const productos = new Contenedor('./productos.txt');


router.get('/',(req,res)=>{
    res.send(`Se encuentra en direccion localhost/${PORT}/api`);
})

router.get('/productos',async (req,res)=>{
    await productos.getAll()
        .then((productos)=>res.json(productos))    
        .catch(error=>console.log(error))
})

router.get('/productos/:id',async (req,res)=>{
    await productos.getAll()
        .then(productos=>{
            const id = parseInt(req.params.id)
            const productoEncontrado = productos.filter(producto => producto.id === id)
            if(productoEncontrado.length>0){
                res.json(productoEncontrado)
            } else {
                res.json({error: 'producto no encontrado'})
            }
        })    
        .catch(error=>console.log(error))
})

router.post('/productos', async (req,res)=>{
    //await productos.save(req.body.title)
    const traigoProductos = await productos.getAll();
    const producto = req.body;
    await productos.save(producto);
    const allProducts = await productos.getAll();
    const lastProduct = allProducts[allProducts.length-1];
    res.status(200).send(lastProduct);
})



app.use('/api',router);
