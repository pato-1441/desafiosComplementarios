//
//
//
//
//
class User {
    constructor(name,lname,mail,password,birth){
        this.name = name;
        this.lname = lname;
        this.mail = mail;
        this.password = password;
        this.birth = birth;                
    }
    updateUsername(){
        this.name = prompt('Ingrese su nombre nuevo:');
        this.lname = prompt('Ingrese su apellido nuevo:');
        this.mail = prompt('Ingrese su mail nuevo:');
        this.password = prompt('Ingrese su contraseña nueva:');
        this.birth = prompt('Ingrese su fecha de nacimiento nueva:');     
        alert('Sus datos han sido modificados a: '+'\n- '+this.name+'\n- '+this.lname+'\n- '+this.mail+'\n- '+this.password+'\n- '+this.birth);
    }
}
const users = []
users.push(new User('Patricio','Albornoz','admin@gmail.com','admin','16/05/04'));
users.push(new User('Guillermo','Albornoz','guille@gmail.com','guille','30/03/73'));
users.push(new User('Silvina','Wagner','silvi@gmail.com','silvi','19/10/74'));


function addUser(){
    let nuevoUser = new User(
        prompt('Nombre:'),
        prompt('Apellido:'),
        prompt('Mail:'),
        prompt('Contraseña:'),
        prompt('Fecha de nacimiento:')
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