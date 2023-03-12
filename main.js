const form = document.getElementById('form-contato');
const contatos = [];
const notas = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabel();
    });

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if (contatos.includes(inputNomeContato.value)) {
        alert (`O contato: ${inputNomeContato.value} já foi inserida`);
    } else {
    contatos.push(inputNomeContato.value);
    notas.push(parseFloat(inputNumeroContato.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += `</tr>`

    linhas += linha;
    }
    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabel() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
