let varA = 'A';
let varB = 'B';
let varC = 'C';

// É necessario a criação de uma variavel temporaria para salvar o valor de A sem que ele mude quando atribuimos os novos valores.

const temA = varA;
varA = varB;
varB = varC;
varC = temA;

console.log(varA, varB, varC);