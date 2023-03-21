const nome = prompt('Digite seu nome completo');

document.body.innerHTML += `Seu nome é: <strong>${nome}</strong><br/>`;
document.body.innerHTML += `Seu nome tem ${nome.length} letras<br/>`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome.charAt(1)}<br/>`; //Podemos usar  ${nome[1]}
document.body.innerHTML += `Qual o indice da primeira A no seu nome? ${nome.indexOf('a')}<br/>`;
document.body.innerHTML += `Qual o indice da ultima letra A do seu nome? ${nome.lastIndexOf('a')}<br/>`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(-3, nome.length)}<br/>`;
document.body.innerHTML += `As palavras do seu nome são: ${nome.split('')}<br/>`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()} <br/>`;
document.body.innerHTML += `Seu nome com as letras minusculas: ${nome.toLowerCase()} <br/>`;

