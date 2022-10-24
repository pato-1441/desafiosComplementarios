const socket = io("http://localhost:8080");

socket.on("all products", dato =>{
    console.log(dato);
})