const fs = require('fs');

class Contenedor{
    nombreArchivo
    constructor(nombreArchivo) {
        this.nombreArchivo=nombreArchivo;
    }
    async save(object){
        const productos = await this.getAll();
        console.log(productos);
        //const producto = object;
        //producto.id = productos?.id === 0 ? 1 : productos[productos.length-1].id+1;

        //productos.push(object);
        //await fs.promises.writeFile(this.nombreArchivo,JSON.stringify(object),'utf-8');
    }

    async getById(id){
        
    }

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
}

const prueba = new Contenedor('./archivo.txt');
prueba.getAll();
prueba.save({
    "title": "Coca-Cola",
    "price": "550",
    "thumbnail": "empty"
  });