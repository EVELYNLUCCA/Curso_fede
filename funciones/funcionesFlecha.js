// const sumar = (num1, num2) => {
//     return num1 + num2
// };

const sumar = (num1, num2) => num1 + num2;

// La función flecha puede tener un return IMPLÍCITO, osea, que no es necesario escribir
// la palabra return, cuando solo necesitemos retornar en una linea.

const resultado1 = sumar(10, 15);

const resultado2 = sumar(30, 5);

const resultado3 = sumar(0, 4);

const resultado4 = sumar(3, 3);

document.write(`${resultado1} <br>`, `${resultado2} <br>`, `${resultado3} <br>`, `${resultado4} <br>`)