//
//
//
//
//
// Usuarios
class User {
    constructor(username,mail,password){
        this.username = username;
        this.mail = mail;
        this.password = password;          
    }
    updateUsername(){
        this.username = prompt('Ingrese su nombre nuevo:');
        this.mail = prompt('Ingrese su mail nuevo:');
        this.password = prompt('Ingrese su contraseña nueva:');     
        alert('Sus datos han sido modificados a: '+'\n- '+this.username+'\n- '+this.mail+'\n- '+this.password);
    }
}
const users = []
users.push(new User('Patricio','admin@gmail.com','admin'));
users.push(new User('Guillermo','guille@gmail.com','guille'));
users.push(new User('Silvina','silvi@gmail.com','silvi'));


function addUser(){
    let nuevoUser = new User(
        prompt('Nombre:'),
        prompt('Mail:'),
        prompt('Contraseña:')
        );
    users.push(nuevoUser);
    alert('Se ha agregado el usuario: '+(users[users.length-1].name)+' correctamente.');
}

function removeUser(){
    let remove = confirm('¿Desea remover el usuario: '+(users[users.length-1].name)+'?');
    if(remove){
        users.pop();
        alert('Se ha eliminado correctamente.');
    } else {
        alert('El usuario '+(users[users.length-1].name)+' no ha sido eliminado.');
    }   
    
}

function mostrarUsers(){
    users.forEach((user)=>{
        console.table(user);
    })
}

//  Fin Usuarios
// Log In
function validarLogin(username,password){
    let location='';
    if(username==='admin'&&password==='admin'){
        location=('dashboard.html');
    }
}