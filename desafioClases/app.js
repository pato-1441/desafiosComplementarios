class Usuario{
    constructor(nombre,apellido,libros=[],mascotas=[]) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getFullName(){
        return `'${this.nombre} ${this.apellido}'`;
    }
    addMascota(mascota){
        this.mascotas.push(mascota);
    }
    countMascotas(){
        return this.mascotas.length;
    }
    addBook(nombreLibro,autorLibro){
        this.libros.push({title:nombreLibro,author:autorLibro});
    }
    getBookNames(){
        const nombresLibros=[];
        this.libros.forEach(libro=>nombresLibros.push(libro.title));
        return nombresLibros;
    }
}
    
let userOne = new Usuario(
    'Pepito',
    'Mendez',
    [{title:'Spiderman',author:'Stan Lee'}],
    ['Perro','Loro']
);

console.log(userOne.getFullName());

userOne.addMascota('Lobo');

console.log(userOne.countMascotas());

userOne.addMascota('Gato');
console.log(userOne.countMascotas());

userOne.addBook('Under Shop','Big Papa');
console.log({userOne});

console.log(userOne.getBookNames());