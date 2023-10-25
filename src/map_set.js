let meuMap = new Map();
meuMap.set("nome", "gia")

console.log(meuMap)

const nome = meuMap.get("nome")

console.log(nome)

console.log(meuMap.has("sobrenome"))

// meuMap.clear()

console.log(meuMap.size)

for (let chave of meuMap.keys()){
    console.log(chave)
}

for (let valor of meuMap.values()){
    console.log(valor)
}

for(let [chave, valor] of meuMap.entries()){
    console.log(`${chave}: ${valor}`)
}

meuMap.delete("stack")

console.log(meuMap)

const cpfs = new Set()

cpfs.add("40303386070")
cpfs.add("67030965035")
cpfs.add("35312228052")

console.log(cpfs)

console.log(cpfs.keys())
console.log(cpfs.values())

cpfs.forEach((valor) => {
    console.log(valor)
})

const array = ['Gian Souza', 'José Paulo', 'Maria Isabel', 'Luana', 'Luana', 'Gian Souza']

const arrayComoset = new Set([...array])

const arraySemItensDuplicados = [...arrayComoset]

console.log(arrayComoset)
console.log(arraySemItensDuplicados)