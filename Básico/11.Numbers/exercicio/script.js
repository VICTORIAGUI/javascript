const numero = Number(prompt('Digite um número: '));
const numeroTitulo = document.getElementById('titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = "";
texto.innerHTML += `<p>Seu número - 2 é ${numero - 2}</p>`;
texto.innerHTML += `<p>A raiz quadrada de ${numero} é: ${numero ** (1 / 2)}</p>`;
texto.innerHTML += `<p>O número ${numero} é um número interio? ${(Number.isInteger(numero))}</p>`;
texto.innerHTML += `<p>O número ${numero} é um NaN? ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>O número ${numero} arredondado para baixo fica: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>O número ${numero} arredondado para cima fica ${Math.round(numero)}</p>`;
texto.innerHTML += `<p>O número ${numero} com duas casas decimais fica: ${numero.toFixed(2)}</p>`;