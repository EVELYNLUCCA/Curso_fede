/* 
    La sentencia if busca si la condición es verdadera o falsa
    Si es verdadera, se ejecuta una parte del código
    Si es falsa, se ejecuta otra.

    Diagrama de flujo: 
    https://i.imgur.com/ohHqQXI.png
*/

const num1 = prompt('Ingrese el número 1');
const num2 = prompt('Ingrese el número 2');
const num3 = prompt('Ingrese el número 3');

if (num1 != num2 && num1 != num3 && num2 != num3) {

    if (num1 > num2 && num1 > num3) {
        document.write(`El número mayor es: ${num1}`);
    } else if (num2 > num1 && num2 > num3) {
        document.write(`El número mayor es: ${num2}`);
    } else {
        document.write(`El número mayor es: ${num3}`);
    }

} else {
    document.write(`No se permiten números iguales`);
}