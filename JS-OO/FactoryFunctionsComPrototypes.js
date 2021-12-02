function pessoa(nome, sobrenome){
    const pessoaPrototype = {
        falar(){
            console.log( this.nome + " fala");
        },
        andar(){
            console.log( this.nome + " anda");
        }
    }

    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}

const Ana = pessoa("Ana", "Maria Braga");