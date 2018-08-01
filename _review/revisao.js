console.log('alo alo w brazil')


// Variaveis
let nome = 'Mario'
nome = 'xavlau'

console.log(nome)

const nomeConstante = 'Mario'
// nomeConstante = 'xavlau' => erro

// Funçoes
function teste() {
    console.log('dentro da funcao')
}
teste()

const minhaVariavelComUmaFuncao = teste

minhaVariavelComUmaFuncao()

// Agrupar dados
const nomes = ['Mario', 'Amanda', 'Pedro']

const pessoa = {
    nome: 'Mario',
    peso: 85,
    andar: function andar() {
        console.log('Mario está andando')
    }
}

