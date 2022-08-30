/* 
    condicional de selección: se pone una variable "a prueba" y se dice que hacer
    cuando tome distintos valores exactos.
*/

/* mostrarle un menú al usuario, que elija un producto, y escribir su producto. */

const eleccion = prompt(`Elija un producto: 
1- Telefono samsung
2- Televisión LG
3- Smartwatch
4- Peluche de github`);

switch (eleccion) {
    case '1':
        document.write('Has seleccionado: Telefono samsung');
        break;
    case '2':
        document.write('Has seleccionado: Televisión LG');
        break;
    case '3':
        document.write('Has seleccionado: Smartwatch');
        break;
    case '4':
        document.write('Has seleccionado: Peluche de github');
        break;    
    default:
        document.write('No contamos con ese producto.');
        break;
};

// if(eleccion == 1){
//     document.write('Has seleccionado: Telefono samsung');
// } else if(eleccion == 2){
//     document.write('Has seleccionado: Televisión LG');
// } else if(eleccion == 3){
//     document.write('Has seleccionado: Smartwatch');
// } else if(eleccion == 4){
//     document.write('Has seleccionado: Peluche de github');
// } else {
//     document.write('No contamos con ese producto.')
// }