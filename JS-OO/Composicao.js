const Falar = {
    falar(){
        console.log( this.nome + " fala");
    }
}

const Andar = {
    andar(){
        console.log( this.nome + " anda");
    }
}

const pessoaPrototype = { ...Falar, ...Andar};

//(ou) const pessoaPrototype = Object.assing({}, Falar, Andar);

function CriaPessoa(nome, sobrenome){
    return Object.create(pessoaPrototype, {
        nome: {
            value: nome
        },
        sobrenome: {
            value: sobrenome
        }
    })
}

const Ana = pessoa("Ana", "Maria Braga");