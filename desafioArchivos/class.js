const fs = require('fs');

class Contenedor{
    nombreArchivo
    constructor(nombreArchivo) {
        this.nombreArchivo=nombreArchivo;
    }
    async save(object){
        const productos = await this.getAll();
        console.log(productos);
        const producto = object;
        console.log(producto);
        //producto.id = productos?.id === 0 ? 1 : productos[productos.length-1].id+1;

        //productos.push(object);
        await fs.promises.writeFile(this.nombreArchivo,JSON.stringify(producto),'utf-8');
    }

    async getById(id){
        const productos = await this.getAll();
        //console.log(productos);
        const resultado = productos.find(producto=>producto.id===id);
        //resultado && (return resultado;)
        //const encontrado = productos.find(producto=>{producto.id});
        //return encontrado;
    }

    async getAll(){
        try {
            const file = await fs.promises.readFile(this.nombreArchivo,'utf-8');
            if (file) {
                const files = JSON.parse(file);
                return files
            } else {
                return `No existen productos en el archivo: "${this.nombreArchivo}"`;
            }
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }
}

const prueba = new Contenedor('./archivo.txt');
prueba.getAll();
prueba.save([{
    "id":"0",
    "title": "Coca-Cola",
    "price": "550",
    "thumbnail": "empty"
  },{"id":"1",
  "title": "Pepsi",
  "price": "350",
  "thumbnail": "empty"}]);
prueba.getById(0);