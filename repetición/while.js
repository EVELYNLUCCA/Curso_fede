let num = parseInt(prompt('Ingrese un número'));

while (num >= 0 && num <= 10) {
    console.log('su numero es valido');

    num = parseInt(prompt('Ingrese un número'));
}; // En vez de contador, la reasignación de la variable es preguntándole al usuario.

// let veces = 0; 

// while (veces <= 5) {
//     let usuario = prompt('cual es tu usuario?');
//     document.write(usuario + '<br>'); // para q el document.write haga salto de linea

//     console.log(veces);
//     veces++;
//     // contador para que el while no se repita infinitamente;
// };