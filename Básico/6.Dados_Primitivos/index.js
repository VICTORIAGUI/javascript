// Tipos de dados primitivos: String, number, underfined, null, boolean and symbol.

const nome = 'Victória'; // String 
const nome1 = "Victória"; // String
const nome2 = `Victória`; // String
const num1 = 10; // number
const num2 = 10.23; //number 
let nomeAluno; // Variável declarada mas sem valor, recebe underfined (valor indefinido, nulo).
const sobrenomeAluno = null; // Nulo, não aponta pra local nenhum na memória.
const aprovado = false; // Boolean = true, false (lógico).

//Ver o tipo de dados primitivos 

console.log(typeof nome, nome);
console.log(typeof nome1, nome1);
console.log(typeof nome2, nome2);
console.log(typeof num1, num1);
console.log(typeof num2,num2);
console.log(typeof nomeAluno, nomeAluno);
console.log(typeof sobrenomeAluno, sobrenomeAluno);
console.log(typeof aprovado, aprovado);

// Outro tipo de dado = Diferente do primitivo é passado por referência (array).

const a = [1, 2];
const b = a;

console.log(a,b);

b.push(3);
console.log(a,b);

// Nos array nós fizemos a variável 'b' receber o mesmo valor da variável 'a' por referência e quando mudamos qualquer coisa na variável 'a' o valor é refletido na variável 'b' e vice-versa.

//Já nas variáveis primitivas se mudarmos o valor de alguma variável, o valor da variável que recebe não altera.

let c = 2;
const d = c;
console.log(c, d); // 2, 2

c = 3;
console.log(c, d); // 3, 2


// Linha 10: quando eu utilizo nulo eu explicitamente vou lá e falo o que quero que essa variável não tenha não aponte pra nenhum local na memória.