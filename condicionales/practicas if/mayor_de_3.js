const num1 = prompt('Ingrese el número 1');
const num2 = prompt('Ingrese el número 2');
const num3 = prompt('Ingrese el número 3');

let maximo = num1;

if(num2 > maximo) maximo = num2;

if(num3 > maximo) maximo = num3;

document.write(`El número mayor es: ${maximo}`);