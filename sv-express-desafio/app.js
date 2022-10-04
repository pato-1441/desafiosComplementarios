//import express from 'express';


const express = require('express')
const Contenedor = require('./Contenedor');

const app = express();
const PORT = 8080;

const productos = new Contenedor('./productos.txt');

app.get('/',(req,res)=>{
    res.send(`<h1>Este es nuestro home</h1>`)
});

app.get('/productos',(req,res)=>{
    productos.getAll()
        .then((productos)=>res.json(productos))    
        .catch(error=>console.log(error))
});

app.get('/productos-random', async (req,res)=>{
    const arrayProductos = [];
    let cantProductos = 0;
    let random = 0;
    await productos.getAll()
        .then((producto)=>{
            arrayProductos.push(...producto)
            /* cantProductos = producto.length;
            const randomReturn = () => (parseInt(Math.random()*10)*cantProductos);
            random = randomReturn();
            res.json(productos.getById(random)); */
        })    
        .catch(error=>console.log(error));
    random = Math.floor(Math.random()*arrayProductos.length)+1
    res.json(await productos.getById(random))
});



app.listen(PORT,()=>{console.log(`Escuchando en puerto: ${PORT}`);});