/*

Define una función recursiva isEven que corresponda a esta descripción. La función debe aceptar un solo parámetro (un número entero positivo) y devolver un booleano.

*/

function isEven(number) {
    if ( typeof number === 'number' && number > 0) {
        return number % 2 === 0; 
              
    } else {
        return '??';        
    }
}

console.log(isEven(-1));
