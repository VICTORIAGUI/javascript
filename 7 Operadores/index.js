// Operadores aritméticos, de atribuição e de encremento.

/* Aritméticos 
+ = Adição / Concatenação 
- = Subtração 
** = Potencialização 
% = Resto da divisão 
*/

const num1 = 5;
const num2 = 10;
console.log(num1 + num2);

// Concatenação = "colocar junto".

const num3 = '5';
console.log(num3 + num2);

// Concatenação com string 

const um = 'Hello! ';
const dois = 'How are you?'
console.log(um + dois);

// Subtração 

const num4 = 7;
const num5 = 4;
console.log(num4 - num5);

// Potencialização 

const num6 = 2;
const num7 = 4;
console.log(num6 ** num7);

// Resto 

const num8 = 15;
const num9 = 4;
console.log(num8 % num9);

const num10 = 5;
console.log(num8 % num10);

// Equação 

console.log(num1 + num2 * num3); // A potencialização é sempre executada primeiro, depois a multiplicação e por último adição e subtração.
console.log((num1 + num2) * num3); // Sempre é o primeiro a ser executado é o que tá em parenteses.
console.log(num1 * num2 / num3); // Vai seguir a sequencia da esquerda pra direita.

/* Ordem das operações
( ) O que tiver entre parenteses
** Potencialização 
* / % Multiplicação, divisão e o resto da divisão 
+ - Adição e subtração
Quando os operadores tem a mesma procedência a equação vai ser executada da esquerda pra direita.
*/

// Operador de incremento, ele atribui um valor á variável e a incrementa.
// Operadores de incremento não podem ser usados em constantes apenas em variáveis.

// Operador pós
let contador = 1;
contador++; //2
contador++; //3 
contador++; //4
contador++; //5
console.log(contador);

let contadorUm = 1;
console.log(contadorUm++);
console.log(contadorUm);

// Operador pré
let calculadora = 1;
++calculadora; //2
++calculadora; //3
++calculadora; //4
++calculadora; //5
console.log(calculadora);