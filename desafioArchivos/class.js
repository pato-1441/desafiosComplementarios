const fs = require('fs');

class Contenedor{
    nombreArchivo
    constructor(nombreArchivo) {
        this.nombreArchivo=nombreArchivo;
    }

    async save(object){
        try {
            const productos = await this.getAll();
            const productosDos = productos.concat(object);
            console.log(productosDos);
            await fs.promises.writeFile(this.nombreArchivo,JSON.stringify((productosDos),null,2),'utf-8');
            console.log(`Escritura realizada con éxito.`)
        } catch (error) {
            throw new Error (`Error en escritura: ${error.message}`);
        }
        
    }

    async getById(id){
        const productos = await this.getAll();
        try {
            productos.forEach(producto => {
                if(producto.id===id){
                    console.log(`\n Producto seleccionado: ${producto.title}\n ID: ${producto.id}\n Precio: $${producto.price}`)
                }
            });
        } catch (error) {
            console.log(`Error: ${error}`);
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
            productos.forEach(producto => {
                if(producto.id==id){
                    //productos[producto.id]='';
                    productos.splice(producto.id-1,1);
                }
            });
            /* const item = productos.find((prod) => prod.id == id);
            const indice = productos.indexOf(item);
            productos.splice(indice, 1); */
            await fs.promises.writeFile(this.nombreArchivo,JSON.stringify((productos),null,2),'utf-8');
        } catch (error) {
            console.log(`Error: ${error}`);
        }  
    }
}

const prueba = new Contenedor('./archivo.txt');
//prueba.getAll();

/* prueba.save([
             {
              id:"0",
              title: "Coca-Cola",
              price: "150",
              thumbnail: "empty"
              },{
              id:"1",
              title: "Pepsi",
              price: "170",
              thumbnail: "empty"
              },{
              id:"2",
              title: "Sprite",
              price: "200",
              thumbnail: "empty"
             }
            ]);    
 */
prueba.getById(0);
prueba.deleteById(0);
prueba.getAll();



/*
prueba.save([
             {
              id:"3",
              title: "Coca-Cola",
              price: "150",
              thumbnail: "empty"
              },{
              id:"4",
              title: "Pepsi",
              price: "170",
              thumbnail: "empty"
              },{
              id:"5",
              title: "Sprite",
              price: "200",
              thumbnail: "empty"
             }
            ]);    
*/