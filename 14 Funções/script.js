// Funções executam ações, geralmente um bloco de código.

// function saudacao() {
//  console.log('Bom Dia!');
// }

// saudacao();

// Enviando dados com as funções

// function saudacao(nome) {
//     console.log(`Bom dia ${nome}!`)
// }

// saudacao('Victória');
// saudacao('Arkan');
// saudacao('Gael');

// Salvando o que retorna na função.

function saudacao(nome) {
    console.log(`Bom dia ${nome}!`);
}

const variavel = saudacao('Victória');
console.log(variavel); // Toda function não retorna valor nenhum, por padrão.

// Salvando o que a função retorna.
function saudacao(nome){
    return ;// Vai ser o que vai ser salvo na função.
}

// Função soma.
function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(3, 5));
console.log(soma(10, 7));
console.log(soma(4, -2));

const resultado = soma(2, 2);
console.log(resultado); //Não se pode mudar nada dentro de uma function, apenas fora.

// Dentro de uma function tudo que está abaixo de return não será executado.

// Criar uma function anonima.

const raiz = function(n) {
return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

// Arron function (não usa a palavra function e nem return)

const raiz2 = n => n ** 0.5;

console.log(raiz2(9));
console.log(raiz2(16));
console.log(raiz2(25));