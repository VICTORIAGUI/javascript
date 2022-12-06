/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg tem 1.8 de altura e seu IMC é de 25.925925925925924
*/
const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
let peso = 84;
let alturaEmM = 1.8
let imc; 
let anoNascimento;

// Conta do IMC

imc = peso / (alturaEmM * alturaEmM);
console.log(imc);

// Conta do Ano de Nascimento 

anoNascimento = 2022 - idade;
console.log(anoNascimento)

// Enunciado 
console.log(nome + ' ' + sobrenome + ' nasceu em ' + anoNascimento + ' e tem ' + idade + ' anos, pesa ' + peso + ' kg, tem ' + alturaEmM + ' de altura e seu IMC é de ' + imc )

// Template Strings (É a junção de strings com variaveis ou constantes)
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento} e tem ${idade} anos, pesa ${peso} kg, tem ${alturaEmM} de altura e seu IMC é de ${imc}`)