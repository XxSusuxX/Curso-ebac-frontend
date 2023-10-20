function Personagem(nome, raca, tipo, nivel){
    this.nome = nome;
    this.raca = raca;
    this.tipo = tipo;
    this.nivel = nivel;
}

function Poder(nome, poder, distancia){
    Personagem.call(this, nome);
    this.poder = poder;
    this.distancia = distancia;

}

function Atributos(nome, vida, ataque, defesa, ex){
    Personagem.call(this, nome);
    this.vida = vida;
    this.ataque = ataque;
    this.defesa = defesa;
    this.ex = Math.round(ex * 1.1)
}

const Alex = new Personagem("Alex", "Humano", "Guerreiro", 10);
const poderAlex = new Poder("Alex","Força", "Curta");
const atributosAlex = new Atributos("Alex", 1300, 256, 137, 78);
console.log (Alex);
console.log(poderAlex);
console.log(atributosAlex);