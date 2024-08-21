/*

Escribe una función contarBs que toma una cadena como único argumento y devuelve un número que indique cuántos caracteres B en mayúscula hay en la cadena.

A continuación, escribe una función llamada contarCaracter que se comporte como contarBs, excepto que toma un segundo argumento que indica el carácter que se va a contar (en lugar de contar solo caracteres B en mayúscula). Reescribe contarBs para hacer uso de esta nueva función.

*/

function countBs(cadena) {
    let text = cadena.match(/B/g);
    return text.length;
}

function countChar(cadena , caracter) {
    const regex = new RegExp(caracter, "g");
    let text = cadena.match(regex);
    return text ? text.length : 'Es incorrecto';
}


console.log(countBs('BOB'));
console.log(countChar("kakkerlak", "k"));