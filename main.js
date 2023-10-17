const form = document.getElementById('form-atividade')
let linhas = ''

form.addEventListener('submit', function(e)  {      //function(e) ativada quando envia
    e.preventDefault()
    adicionarLinha()
    atualizarTabela()
})

function adicionarLinha() {
    const nomeContato = document.getElementById('nome-contato')
    const numContato = document.getElementById('num-contato')

    let linha = '<tr>'
    linha += `<td>${nomeContato.value}</td>`
    linha += `<td>${numContato.value}</td>`
    linha += '</tr>'
    linhas += linha

    numContato.value = ''
    nomeContato.value = ''
}

function atualizarTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

console.log(nomeContato.value)