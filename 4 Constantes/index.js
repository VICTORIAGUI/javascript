//Uma constante é criada como uma variável inicializada, e seu valor é permanente, não podendo ser alterado durante a execução do script. Ela recebe um valor ao ser criada, e esse valor permanece sempre o mesmo durante toda a execução do programa.
// Não podemos usar constantes com palavras reservadas 
// Constantes precisam ter nomes significativos 
// Não podem conter espaços ou traços 
// Utilizamos camelCase 
// Case-sensitive
// Não podemos modificar o valor de uma constante 
// NÃO UTILIZE VAR, UTILIZE CONST

const nome = 'Victória'
// Mudando a constante para variável 
// Subtistuir o 'const' por 'let': let nome = 'Victória'

const primeiroNumero = 5;
const segundoNumero= '10';
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
const resultadoQuadriplicado = resultadoDuplicado * 2;
console.log(resultado)
console.log(resultadoDuplicado)
console.log(resultadoQuadriplicado)

// Consultar o tipo de constante 
console.log(typeof primeiroNumero);
console.log (typeof segundoNumero);