const alunos = [
    {nome: 'Alice', nota: 7},
    {nome: 'Bob', nota: 5},
    {nome: 'Carol', nota: 8},
    {nome: 'David', nota: 6},
    {nome: 'Eva', nota: 9}
]

console.log(alunosAprovados(alunos))

function alunosAprovados (alunos){
    return alunos.filter(aluno => aluno.nota >= 6)
}