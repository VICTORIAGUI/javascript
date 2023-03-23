// Os arrays são estruturas que servem para guardar dados, e organizá-los. Podemos imaginar como uma lista ou uma coleção de coisas.

// Para criar uma lista devemos por os objetos dentro de couchetes [] e os separando por virgulas.

// Os arrays são indexados por elementos. Logo cada objeto na lista é um número diferente sempre começando com 0 e seguindo por ondem crescente.

//                0       1        2
const alunos = ['Luiz', 'João', 'Maria'];

// Acessando um valor dentro do array pelo index.
console.log(alunos[2]); //Retornar Maria.

// Acessando o valor completo dentro do array.
console.log(alunos);

// Acessando o index 0 dentro do array;
console.log(alunos[0]);

// Editando(substituindo) um valor.

alunos[0] = 'Eduardo';

// Adicionando um novo elemento.

alunos[3] = 'Luiza';

console.log(alunos);

// Como saber o tamanho do array.
console.log(alunos.length);

// Adicionando um valor no final do array.
alunos.push('Fabio');
alunos.push('Otavio');

console.log(alunos)

// Adcionando um valor no começo.

alunos.unshift('Fernando');
alunos.unshift('Marcos');

console.log(alunos)

// Remover elemento do final do array 

// alunos.pop();
// console.log(alunos);

// Salvar o elemento removido na variavel.

const removido = alunos.pop();
console.log(removido);
console.log(alunos);

// Remover elemento do começo do array.

const removidos = alunos.shift();
console.log(removidos);
console.log(alunos);

// Sempre que removemos um elemento removemos também o indice desse elemento.

// Para remover sem remover o indice.

delete alunos[1];
console.log(alunos);

// Valor padrão para coisas que não existes undefined.

// Fatiar um array 
console.log(alunos.slice(0, 3));

console.log(alunos.slice(0, -2));

// Consultar se está trabalhando com array.
console.log(alunos instanceof Array);