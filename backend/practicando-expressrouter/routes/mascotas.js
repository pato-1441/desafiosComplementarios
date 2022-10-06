const express = require('express');
const {Router} = express;
const router = Router();

const mascotas = [{"nombre":"teo", "raza":"beagle", "edad":8}];

router.get('/',(req,res)=>{
    console.log('Hiciste un GET a /mascotas');
    res.send({mascotas});
});

router.post('/',(req,res)=>{
    console.log('Hiciste un POST a /mascotas');
    const mascota = req.body;
    mascotas.push(mascota)
    res.status(200).send('Mascota agregada correctamente.')
});

module.exports = router;