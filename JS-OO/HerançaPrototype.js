function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.desconto = (percentual) => { 
    this.preco = this.preco - (this.preco * (percentual/100));
};

Produto.prototype.aumento = (percentual) => { 
    this.preco = this.preco + (this.preco * (percentual/100));
};

// Camiseta é uma Especialização de Produto
// Herda tudo de produto
// possue seus atributos e métodos específicos

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;

    // Camiseta.prototype.constructor = camiseta;
};

//sobrescrevendo um método

Camiseta.prototype.aumento = (percentual) => { 
    this.preco = this.preco + (this.preco * 0.30);
};



Camiseta.prototype = Object.create(Produto.prototype);

Camiseta.prototype.constructor = Camiseta;

const CamisaPolo = new Camiseta('Camisa polo', 40, 'branca');

CamisaPolo.aumento(20);

console.log(CamisaPolo);



function Cinto(nome, preco, cor, estoque){
    Produto.call(this, nome, preco);
    this.cor = cor;

    //setando as propriedades do atributo estoque e criando um getter e um setter

    Object.defineProperty(this, 'estoque', {
        enumerable: true,    //não apaga
        configurable: false, //não sobrescreve
        get: function(){
            return estoque;
        },
        set: function(valor){
            if (typeof valor !== 'number') {
                throw new error("value expected typeof: number");
            }
            estoque = valor;
        }
    });
};

Cinto.prototype = Object.create(Produto.prototype);

Cinto.prototype.constructor = Cinto;

const CintoCouro = new Cinto("Cinto Social", 20, "Preto", 30);

CintoCouro.estoque = 100;        //Setter

console.log(CintoCouro.estoque); //Getter

CintoCouro.aumento(20);

console.log(CintoCouro);