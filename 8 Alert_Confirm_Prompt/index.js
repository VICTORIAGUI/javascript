let num1 = prompt('Digite um número');
let num2 = prompt('Digite outro número');

num1 = Number(num1);
num2 = Number(num2);

let conta = (num1 + num2);

alert(`O resultado da sua conta foi: ${conta}`);

// Pode fazer a conta direto no resultado mas não é o mais indicado pois pode gerar duvidas.

alert(`O resultado da sua conta foi: ${num1 + num2}`);