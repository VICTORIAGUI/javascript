let num1 = 1; // Number
let num2 = 25; // Number

// Convertendo um number para uma string temporarimente.
console.log(num1.toString() + num2);
console.log(typeof num1); //Retornar number

// Alterando o valor de num1 de number para uma string.

num1 = num1.toString();
console.log(typeof num1); //Retornar string.

// Transformando um number em binario.

num1 = 10;

console.log(num1.toString(2)); // Retornar 1010.

// Arredondando valor regralmente usado para precificar produtos.
num1 = 10.5798837746;

console.log(num1.toFixed(2))// Retornar valor arredondado de dois valores depois do ponto, 10.58.

console.log(num1.toFixed(3))// Retornar valor arredondado de três valores depois do ponto, 10.580.

// Descobrindo se o number é inteiro.
console.log(Number.isInteger(num1)); //Retornar false pois o num1 não é um number inteiro.

console.log(Number.isInteger(num2)); //Retornar true pois o num2 é um number inteiro.

let temp = num1 * 'olà';
console.log(temp); //Precisa retornar NaN (Not a Number), pois o olá é uma string. 

// Consultando se uma conta é uma NaN (invalida).

console.log(Number.isNaN(temp)); // Retorno precisa ser true já que o temp não é um number.

temp = num1 * num2;
console.log(Number.isNaN(temp)); // Retorno precisa ser true já que a variavel temp agora é um number.



// As contas senguem um padrão IEE 754-2008 que torna as contas imprecisas.

let num3 = 0.7; // number
let num4 = 0.1; // number

console.log(num3 + num4); // Para essa conta ser precisa deveria retornar 0.8 mas o retorno foi 0.7999999999999999.

// Outra forma de fazer a conta
num3 += num4; // num3 = num3 + num4; Retorno deveria ser 0.8
num3 += num4; // num3 = num3 + num4; Retorno deveria ser 0.9
num3 += num4; // num3 = num3 + num4; Retorno deveria ser 1.0

console.log(num3);

// Transformando em número inteiro.

num3 = parseFloat(num3.toFixed(2));

console.log(num3);
console.log(Number.isInteger(num3));

// Outra forma de tornar inteiro.

num3 += num4; // 0.8
num3 += num4; // 0.9
num3 += num4; // 1.0
num3 += num4; // 1.1
num3 += num4; // 1.3
num3 += num4; // 1.4
num3 += num4; // 1.5
num3 += num4; // 1.6
num3 += num4; // 1.7
num3 += num4; // 1.8
num3 += num4; // 1.9
num3 += num4; // 2.0

console.log(num3); // O terno deveria ser 2.0 mas retorna 2.200000000000001
console.log(Number.isInteger(num3)); 

// Outra forma de tornar inteiro 

num3 = 0.7;

num3 = ((num3 * 100) + (num4 * 100))/100; // Retorna 0.8

console.log(num3);