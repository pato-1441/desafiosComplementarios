const fs = require('fs');

class Contenedor{
    nombreArchivo
    constructor(nombreArchivo) {
        this.nombreArchivo=nombreArchivo;
    }

    async save(object){
        try {
            const productos = await this.getAll();
            let lastId = 0
            if(productos.length)
                lastId = productos[productos.length - 1].id
            this.id = lastId + 1
            const newObject = {...object, id: this.id}
            const productosDos = productos.concat(newObject);
            await fs.promises.writeFile(this.nombreArchivo,JSON.stringify((productosDos),null,2),'utf-8');
            console.log(`Escritura realizada con éxito.`)
        } catch (error) {
            throw new Error (`Error en escritura: ${error.message}`);
        }
        
    }

    async getById(id){
        const productos = await this.getAll();
        try {
            const arrayFound = productos.filter(producto => producto.id === id)
            if(Array.isArray(arrayFound) && arrayFound.length)
                return arrayFound[0]
            else    
                throw new Error(`Document with id ${id} not found`)
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }         
    };

    async getAll(){
        try {
            const file = await fs.promises.readFile(this.nombreArchivo,'utf-8');
            if (file) {
                const files = JSON.parse(file);
                return files
            } else {
                return [];
            }
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }

    async deleteById(id){
        const productos = await this.getAll();
        try {
            const matchIndex = productos.findIndex(producto => producto.id == id)
            if(matchIndex=== -1)
                throw new Error("Id not found")
            console.log("🚀 ~ file: class.js ~ line 52 ~ Contenedor ~ deleteById ~ matchIndex", matchIndex)
            productos.splice(matchIndex, 1)
            await fs.promises.writeFile(this.nombreArchivo,JSON.stringify((productos),null,2),'utf-8');
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }  
    }

    async deleteAll(){
        try {
            await fs.promises.writeFile(this.nombreArchivo,(''),'utf-8');
        } catch (error) {
            throw new Error (`Error en escritura: ${error.message}`);
        }
    }
}

const prueba = new Contenedor('./archivo.txt');

const main = async () => {
    // prueba.getAll();
    await prueba.save({
        id: 2,
        title: "Corona",
        price: "375",
        thumbnail: "empty"
        }); 
    console.log("Documento hallado: ", await prueba.getById(1));
    await prueba.deleteById(0);
    // await prueba.deleteAll();
    // prueba.getAll();
}


main()