// Arredondando o número para baixo com match.floor
let num1 = 9.54578;
let num2 = Math.floor(num1);

console.log(num2);

// Arredondando o número para cima com Mtch.ceil

let num3 = Math.ceil(num1);

console.log(num3);

// Arredondando para o mais próximo. A partir da metade ele arredonda para cima e abaixo da metade ele arredonda para baixo.

let num4 = Math.round(num1);

console.log(num4);

// Achando o maior número.

console.log(Math.max(1, 9, -5, 4, 5, 11, 15, 64));

// Achando o menor número

console.log(Math.min(1, 9, -5, 4, 5, 11, 15, 64));

// Grando números aleatorios.

console.log(Math.random());

// Forma mais coeza de escrever o código

let aleatorio = Math.random();

console.log(aleatorio);

// Entre número aleatorio entre 5 e 10

let aleatorio1 = Math.round(Math.random() * (10 - 5) + 5);

console.log(aleatorio1);

// Descobrindo raiz quadrada

let num5 = 9;

console.log(num5 ** (1/2));

// Outra forma de escrever o código.

console.log(num5 ** 0.5);