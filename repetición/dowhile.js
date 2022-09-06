let color = 'rojo';

// while (color!='rojo') {
//     color = prompt("dame un color (escribe rojo para salir)","") 
// } // Nunca lo va a hacer porque la variable ya es "rojo"

do { 
    color = prompt("dame un color (escribe rojo para salir)","") 
} while (color != "rojo"); // Lo hace mínimo 1 vez, porque lo hace y después valida.