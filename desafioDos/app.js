//
//
//
//
let nombreUsuario;

function welcome() {
    alert('Bienvenido al simulador bancario interactivo');
    do {
        nombreUsuario = prompt('¿Cual es su nombre?');
    } while (nombreUsuario === '' || nombreUsuario === null);
    alert('Bienvenido ' + nombreUsuario + ' acepte para continuar');
}

function seleccionarDivisa() {
    let divisa;
    do {
        divisa = prompt('¿Que divisa quiere comprar?\n 1. USD\n 2. EUR\n 3. UYU');
    } while (divisa != '1' && divisa != '2' && divisa != '3');

    switch (divisa) {
        case '1':
            return 'USD';
        case '2':
            return 'EUR';
        case '3':
            return 'UYU';
    }
}

function compararPrecios(divisaSeleccionada){
    if(divisaSeleccionada==='USD'){
        return 296
    } else if(divisaSeleccionada==='EUR'){
        return 316
    } else if(divisaSeleccionada==='UYU'){
        return 3,22
    }
}

function realizarCambio(divisa,costo){
    alert(
        'Usted seleccionó: '+ divisa + '\nCotizacion hoy: $'+costo
    );

    let saldo = prompt('De cuanto es su saldo?\n(Su saldo debe ser mayor al costo de la divisa minimamente por un centavo)');
    if(saldo>costo){
        alert('Usted compró: $'+((saldo/costo).toFixed(2))+' '+divisa+'\nGracias por usar nuestro servicio!');
    } else {
        alert('Recuerde que su saldo debe ser mayor al costo de la divisa!');
    }
}

welcome();
let divisaSeleccionada=seleccionarDivisa();
let costoDivisa=compararPrecios(divisaSeleccionada);
realizarCambio(divisaSeleccionada, costoDivisa);