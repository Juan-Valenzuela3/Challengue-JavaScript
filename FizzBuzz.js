/*

Escribe un programa que use console.log para imporimir todos los números del 1 al 100, con dos excepciones. Para los números divisibles por 5 (y no por 3), imprime "Buzz" en su lugar.

Cuando tengas eso funcionando, modifica tu programa para imprimir "FizzBuzz" para los números que son divisibles por 3 y 5 (y sigue imprimiendo "Fizz" o "Buzz" para los números que son divisibles solo por uno de esos).

*/

for (let i = 1; i <= 100; i++) {
    switch (true) {
        case i % 15 === 0:
            console.log('FizzBuzz');
            break;
        case i % 3 === 0 :
            console.log('Fizz'); 
            break;
        case i % 5 === 0 :
            console.log('Buzz');  
            break;                 
        default:
            break;
    }
    if (![3, 5, 15].includes(i % 15)) {
        console.log(i);
    }
}