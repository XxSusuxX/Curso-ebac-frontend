const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

for (let i = 0; i < redesSociais.length; i++){
    console.log(`Eu tenho perfil na rede sociel ${redesSociais[i]}`)
}

//não retorna array obetos nada
redesSociais.forEach(function(nomeDaRedeSocial, indice){
    console.log(`#${indice}Eu tenho perfil na rede sociel ${nomeDaRedeSocial}`)
})

const alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner']

//retorna array obetos nada
const alunos2 = alunos.map(function(itemAtual){
    return {
        nome: itemAtual,
        curso: 'Frontend'
    }
})

console.log(alunos2)

//retorna o indice
const indiceDaPaula = alunos2.findIndex(function(item){
    return item.nome == 'Paulo'
})
console.log(indiceDaPaula)

//insere no final do array
alunos2.push({
    nome: 'lucio',
    curso: 'Backend'
})

//retorna true se todos os itens do array tem a condição 'frontend'
const todosalunosDeFrontend  = alunos2.every(function(item){
    return item.curso === 'Frontend'
})

console.log(todosalunosDeFrontend)

//retorna true se um dos itens do array tem a condição 'frontend'
const existeAlgumAlunoDeBackend = alunos2.some(function(){
    return item.curso === 'Backend' && item.curso === 'Frontend'
})

console.log(existeAlgumAlunoDeBackend)

function filtraAlunosDeBackend(aluno){
    return aluno.curso === 'Backend'
}

//filtra todos os alunos do curso de Backend
const alunosDeBackend = alunos2.filter(filtraAlunosDeBackend)

console.log(alunosDeBackend)

const nums = [10, 20, 30, 10]

//concatena ou soma os valores do array
const soma = nums.reduce(function(acumulador, itemAtual){
    acumulador += itemAtual
    return acumulador
}, 0)

const nomesDosAlunos = alunos2.reduce(function(acumulador, itemAtual){
    acumulador += `${itemAtual.nome} `
    return acumulador
}, '')
console.log(nomesDosAlunos)