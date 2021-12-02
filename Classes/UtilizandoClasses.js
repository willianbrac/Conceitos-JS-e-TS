class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    falar(){
        console.log(this.nome + " fala");
    }

    Andar(){
        console.log(this.nome + " anda");
    }
}

const Pessoa1 = new Pessoa("Chico", 10);
Pessoa1.falar();