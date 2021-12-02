//Construtora -> molde(classe)

//esta acima do prototype
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    //se houver um prototype com a mesma declaração o js busca primeiro aqui
};

Pessoa.prototype.nomeCompleto = () => `${this.nome} + ${this.sobrenome}`;


console.log(Pessoa.prototype);

const pessoa1 = new Pessoa('Ariana', 'Messias');
const pessoa2 = new Pessoa('Daniel', 'Gonzaga');

console.log(pessoa1.novoAtributo, pessoa2.novoAtributo)
console.log(pessoa1)
console.log(pessoa2);


const data = new Date();
console.log(data);
