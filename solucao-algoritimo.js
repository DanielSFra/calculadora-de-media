let notas = []; // Array para armazenar as notas

/**
 * Adiciona uma nota à lista de notas e atualiza a exibição no HTML.
 */
function adicionarNota() {
    let inputNota = document.getElementById('nota');
    let valorNota = parseFloat(inputNota.value);

    if (isNaN(valorNota) || valorNota < 0 || valorNota > 10) {
        alert('Por favor, insira uma nota válida entre 0 e 10.');
        inputNota.value = '';
        return;
    }

    notas.push(valorNota);
    inputNota.value = '';
    atualizarListaNotasExibidas();
}

/**
 * Atualiza a lista de notas mostradas no elemento <ul> do HTML.
 */
function atualizarListaNotasExibidas() {
    let listaNotasHTML = document.getElementById('notas');
    listaNotasHTML.innerHTML = '';

    notas.forEach((nota, index) => {
        let itemLista = document.createElement('li');
        itemLista.textContent = `Nota ${index + 1}: ${nota.toFixed(2)}`;
        listaNotasHTML.appendChild(itemLista);
    });
}

/**
 * Calcula a média das notas e exibe o resultado (aprovado/reprovado) no HTML.
 */
function calcularMedia() {
    let somatorioNotas = 0;
    let media = 0;

    if (notas.length === 0) {
        document.getElementById('resultado').textContent = 'Nenhuma nota para calcular.';
        return;
    }

    for (let index = 0; index < notas.length; index += 1) {
        somatorioNotas = somatorioNotas + notas[index];
    }

    media = somatorioNotas / notas.length;

    let resultadoElement = document.getElementById('resultado');
    if (media >= 6) {
        resultadoElement.textContent = `Média: ${media.toFixed(2)} - Aprovado(a)!`;
        resultadoElement.style.color = 'green';
    } else {
        resultadoElement.textContent = `Média: ${media.toFixed(2)} - Reprovado(a).`;
        resultadoElement.style.color = 'red';
    }
}