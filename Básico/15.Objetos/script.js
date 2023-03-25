const nome01 = 'Victoria';
const sobrenome01 = 'Guimarães'
const idade01 = 20;

const nome02 = 'Maria';
const sobrenome02 = 'Aparecida';
const idade02 = 55;

// Agrupando as variaveis ralacionadas.
// Para iniciar um object utilizamos as chaves {} e são separados com ,.

const pessoa1 = {
    nome: 'Victória',
    sobrenome: 'Guimarães',
    idade: 20
};

// Consultando os valores da pessoa 1.
console.log(pessoa1.nome);
console.log(pessoa1.idade);

const pessoa2 = {
    nome: 'Maria',
    sobrenome: 'Aparecida',
    idade: 55
};

// Consulltando valores da pessoa 2.

console.log(pessoa2.nome);
console.log(pessoa2.sobrenome);

// Criar uma function que cria os objetos.

function criaPessoa(nome, sobrenome, idade) {
    return {
        nome, sobrenome, idade
    };
}

const pessoa = criaPessoa('Luiz', 'Otávio', 25);
const pessoa3 = criaPessoa('Fernando', 'Oliveira', 27);
const pessoa4 = criaPessoa('Luiza', 'Moreira', 51);
const pessoa5 = criaPessoa('Junior', 'Lara', 54);

console.log(pessoa3.idade, pessoa4.nome, pessoa5.sobrenome)

// Quando uma function está dentro de um object ele é chamada de metodo.

const pessoa6 = {
    nome: 'Victória',
    sobrenome: 'Guimarães',
    idade: 20,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi.`);
    }
};

pessoa6.fala();

// Incrementando idade 

const pessoa7 = {
    nome: 'Maria',
    sobrenome: 'Aparecida',
    idade: 55,

fala() {
    console.log(`A minha idade atual é ${this.idade}`);
},

    incrementarIdade() {
        this.idade++;
    }
};

pessoa7.fala();
pessoa7.incrementarIdade();
pessoa7.fala();
