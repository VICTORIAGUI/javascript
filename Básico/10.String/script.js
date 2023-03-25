// Podemos usar aspas duplas e aspas simples na mesma variavel.
let umString = 'Um "texto"';



// Cada string tem um indice (valor/número), e sempre começa com 0.
//               01234567
let umaString = 'Um texto"'

console.log(umaString[3]) // Retorna t.



// Podemos fazer com charAt
console.log(umaString.charAt(5)); // Retorna x



// Podemos usar a função indexOf para saber onde começa uma palavra;

console.log(umaString.indexOf('texto')) // Retorna 3



// Função para concatenar uma string.

let duasString = "Um texto";

console.log(duasString.concat(' em', ' um', ' lindo', ' dia.')); // Retorna: Um texto em um lindo dia. 
console.log(duasString + ' em um lindo dia.'); // Retorna: Um texto em um lindo dia. 
console.log(`${duasString} em um lindo dia.`) // Retorna: Um texto em um lindo dia. 


// Descobrindo o tamanho da srting com o atibuto length.

console.log(duasString.length);

// Usando a função toUppercase para transformar todas as letras em maiusculas.

console.log(duasString.toUpperCase());

// Usando a função toLowerCase para transformar todas as letras em minusculas.

let tresString = 'UM DIA LINDO.';

console.log(tresString.toLowerCase());

// Expressão regular 
let quatroString = 'O rato roeu a roupa do rei de roma.';

console.log(quatroString.match(/[a-z]/g)); // vai retornar todas as letras minusculas.

console.log(quatroString.match(/[a-z]/)); //Vai retornar o primeiro valor minusculo, qual o index desse valor, qual o valor completo da variavel em que ele se encontra e qual grupo.

console.log(quatroString.match(/o/)); // Vai buscar o index do primeiro valor de 'o', lembrando que se conta da esquerda pra direita. 

// Substiutindo uma palavra ou letra.

console.log(quatroString.replace(/r/, '#')); // Só substitui o primeiro r.

console.log(quatroString.replace(/r/g, '#')); // Com o g ele substitui todos os rs.

// fatiando uma string, pegando um valor e retornando o que tem dentro dele na string.
console.log(quatroString.slice(2, 6)); // Ele começa no index 2 e vai até o index 6, sempre contando com o espaço em branco.

console.log(quatroString.slice(-3)); // Com número negativo ele soma o valor do index da string mais o valor do numero negativo.

console.log(quatroString.length -3); //Descobrindo o valor da string com número negativo.

console.log(quatroString.slice(3)); // Subtraindo o valor a partir do index 3.

// Divir uma string
console.log(quatroString.split('r')); // vai sumir com todos os rs da string.

console.log(quatroString.split('r', 3)); // vai sumir com todos os rs da string até o palavra 3.