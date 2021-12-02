const produto = { nome: "copo", preco: 19 };

//dois objetos com o mesmo valor
const outroObjeto = produto;                //produto e outroObjeto apontam para o mesmo endereço na memória

outroObjeto.preco = 10;                     //o valor é alterado em ambos os objetos;



//spread ...
const outroObjeto = { ...produto };         //pega as propriedades do objeto
outroObjeto.preco = 10;                     //agora esse objeto tem seus próprios atributos;


// adicionando mais atributos
const outroObjeto ={
    ...produto,
    estoque: 23
};


//Object.assing(destino, origem);
//copia o objeto produto para um objeto vazio.
const produto = { nome: "copo", preco: 19};
const lapis = Object.assign({}, produto);
//ou
const lapis = Object.assign({}, produto, {material: "Madeira"}); //junta todos os atributos dos objetos.

//Object.getOwnPropertyDescriptor
const produto = { nome: "copo", preco: 19};
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));  //mostra as definições do atributo

//lendo apenas os valores dos atributos
console.log(Object.values(produto));

//para ler os valores na forma de um array
console.log(Object.entries(produto));

//itera um array para cada atributo do objeto
for (const valor of Object.entries(produto)) {
    console.log(valor[0], valor[1]);
}