/*

Escribe un programa que cree una cadena que represente un tablero de 8x8, usando carácteres de salto de línea para separar las líneas. En cada posición del tablero hay un carácter de espacio o un carácter '#'. Los carácteres deben formar un tablero de ajedrez.

Define una variable size = 8 y cambia el programa para que funcione para cualquier size, generando un tablero con el ancho y alto dados.

*/
let size = 8;
let tablero = '';
let symbol = ' #'
let symbol2 = '# '

for (let i = 1; i <= size/2; i++) {
    let symbolComplete = symbol.repeat(size/2);
    let symbolComplete2 = symbol2.repeat(size/2);
    console.log(`${symbolComplete}\n${symbolComplete2}`);
}