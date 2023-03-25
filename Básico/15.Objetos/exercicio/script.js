function meuEscopo() {
    // Criando uma variavel e selecionando os elementos
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    // Criando um array para armazenar os objetos
    const pessoas = []

    // Criando uma função para executar o programa.
    function recebeEventoForm(evento) {
        // Usando o paramentro para toda vez que enviarmos o formulario a página não se auto-atualizar.
        evento.preventDefault();

        // Declarando as variaveis para selecionar os inputs pelo class.
        const nome = form.querySelector('.userNome');
        const sobrenome = form.querySelector('.userSobrenome');
        const peso = form.querySelector('.pesoUser');
        const altura = form.querySelector('.alturaUser');

        // Criando um objeto dentro de um array. Já que o array armazena numbers (nesse caso a quantidade de objetos) e objetos armazena string (nesse caso os valores do input).
        pessoas.push({
            // Atribuindo o valor do input á variavel pela class.
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        // imprimindo no console da página o array(index dos objetos) e objetos.

        // array: 0: objeto{nome:'', sobrenome:'', peso:'', altura:'' }
        console.log(pessoas);

        // Imprimindo no paragrago os valores do input armazenado na função.
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}`;

    }

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();
