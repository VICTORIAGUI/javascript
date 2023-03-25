// Primitivos (imultáveis) - string, number, boolean, undefined, null (bigint, symbol.)

// Trocar valor da váriavel NÃO é mudar valor primitivo, é atribuir outro valor a variavel.

//          0123
let nome = 'Luiz';
nome[0] = 'R' //Não vai trocar o l por r já que uma string é um valor imultável.
console.log(nome[0], nome);

// Copiando um valor para outra váriavel.

let a = 'A'
let b = a; //Cópia
console.log(a, b);

// Os valores a e b são idependente um do outro, logo se mudarmos o valor de a o b não ira se alterar.

a = 'Outra coisa';
console.log(a, b);



// Referencias (multável) - array, object, function - Passados por referencia..

let c = [1, 2 , 3];
let d = c;
console.log(c, d);

// Logo se eu mudar algo no valor de c ou d o outro valor respectivamente também muda.

c.push(4); //Adicionando um valor.
console.log(c, d); 

d.pop(); // Retirando um valor.
console.log(c, d);

// Como copiar o valor com um dado multavel.
let e = [1, 2, 3];
let f = [...e];
let g = f;

e.push(4);
f.pop();
console.log(e, f, g);

// Fazendo com objetos.

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
}

const pessoa2 = pessoa;

pessoa.nome = 'João';
console.log(pessoa2);

// Copiando o valor de pessoa3 para pessoa4 sem que eles apontem para o mesmo valor na memoria usando spread.

const pessoa3 = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
}

const pessoa4 = {...pessoa3};

pessoa3.nome = 'João';
console.log(pessoa3);
console.log(pessoa4);
