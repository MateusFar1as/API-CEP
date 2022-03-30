async function cep(){
    const valor = document.querySelector('#cep').value
    const response = await fetch(`https://viacep.com.br/ws/${valor}/json/`)
    const dados = await response.json()

    escrever(dados)

    document.querySelector('#cep').value = null
}

function escrever(dados){
    document.querySelector('#rua').value = dados.logradouro
    document.querySelector('#bairro').value = dados.bairro
    document.querySelector('#cidade').value = dados.localidade
    document.querySelector('#estado').value = dados.uf
}