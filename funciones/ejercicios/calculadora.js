// const sumar = (num1, num2) => {
//     if(num1>0 && num2>0){
//         return num1+num2
//     } else {
//         return false;
//     }
// }; 

// const sumar = (num1, num2) => (num1>0 && num2>0) ? num1+num2 : false; //Máxima simplificación

const sumar = (num1, num2) => {
    if(num1>0 && num2>0) return num1+num2;
    return false;
}; 

const restar = (num1, num2) => num1-num2;

const division = (num1, num2) => {
    if(num1 != 0 && num2 != 0) return num1/num2;
    if(num1 < 0 && num2 < 0) return false;
    return false;
};

// const division = (num1, num2) => (num1!= 0 && num2 != 0) || (num1 > 0 && num2 > 0) ? num1/num2 : false; //Máxima simplificación

const multiplicacion = (num1, num2) => num1*num2;