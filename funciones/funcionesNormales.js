// una función es un bloque de código que nosotros podamos repetir cuando queramos,
// con los valores que queramos.

function saludar(){
    const nombreDelUsuario = prompt('Escribe tu nombre de usuario');
    document.write(`Bienvenido ${nombreDelUsuario}`);
}

/* ------------------------------------------------------------------------------ */

function sumar(num1, num2){
    return num1 + num2;
}

const resultado1 = sumar(10, 15);

const resultado2 = sumar(30, 5);

const resultado3 = sumar(0, 4);

const resultado4 = sumar(3, 3);

document.write(`${resultado1} <br>`, `${resultado2} <br>`, `${resultado3} <br>`, `${resultado4} <br>`)