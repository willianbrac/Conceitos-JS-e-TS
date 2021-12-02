const pessoas = [
    {id: 3, nome: "nome3"},
    {id: 1, nome: "nome1"},
    {id: 2, nome: "nome2"}
];

const novasPessoas = new Map();

for (const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa});
}

//novasPessoas é um Array de pessoas com chave/valor
console.log(novasPessoas);

//obter a pessoa 2
console.log(novasPessoas.get(2));

for (const pessoa of novasPessoas){
    console.log(pessoa);
}

for (const [identifier, {id, nome}] of novasPessoas){
    console.log(identifier, id, nome);
}

//pegando as chaves
for(const pessoas of novasPessoas.keys()){
    console.log(pessoas);
}

//pegando os valores
for(const pessoas of novasPessoas.values()){
    console.log(pessoas);
}

//deletando uma chave
novasPessoas.delete(2);
console.log(novasPessoas);