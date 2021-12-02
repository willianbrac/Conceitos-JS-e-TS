const objA = {
    chaveA: 'A'
};

const objB = {
    chaveB: 'B'
    // __proto__: objA
};

const objC = {
    chaveC: 'C'
    // __proto__: objA
    // __proto__: objB
};


// __proto__ === Object.prototype;

// setando o prototype do objB com o objeto A

Object.setPrototypeOf(objB, objA);

console.log(objB.chaveA);

Object.setPrototypeOf(objC, objB);

console.log(objC.chaveA);

console.log(objC.chaveB);

// Acessar o prototype de um objeto

Object.getPrototypeOf();



function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = (percentual) => { 
    this.preco = this.preco - (this.preco * (percentual/100));
};

Produto.prototype.aumento = (percentual) => { 
    this.preco = this.preco + (this.preco * (percentual/100));
};

const produto1 = new Produto('Camisa', 25);

produto1.desconto(20);

console.log(produto1);

produto1.aumento(40);

console.log(produto1);



const produto2 = {nome: 'Caneta', preco: 2};

Object.setPrototypeOf(produto2, Produto.prototype);

produto2.aumento(30);



//criando um objeto e já setanto o prototype

const produto3 = Object.create(Produto.prototype);

produto3.nome = 'Prato';

produto3.preco = 5;

produto3.aumento(60);



//criando o objeto/ criando e configurando as chaves/ setando o prototype

const produto4 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 20
    },
    tamanho: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: 10
    }
});

produto4.aumento(15);

console.log(produto4);
