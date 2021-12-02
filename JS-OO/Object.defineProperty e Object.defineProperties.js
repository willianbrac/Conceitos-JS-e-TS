function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preço = preco;
    //this.estoque = estoque;
    
    //definir propriedade de um objeto(Obj, propriedade, valor)
    Object.defineProperty(this, 'estoque', {
        enumerable: true,                //mostra ahcave
        value: estoque,                  //define o valor
        writable: false,                 //o valor não pode ser alterado
        configurable: true               //Pode reconfigurar a chave
    });
}

const p1 = new Produto('Tenis', 50, 90);
console.log(p1);


//para ver todas as chaves em um ojeto
console.log(Object.keys(p1)); //retorna um array

//for in pega item por item separadamente
for(let key in p1) {
    console.log(key);
}


//================================================
//properties

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preço = preco;

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: false,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: false,
            configurable: true
        }
    });
}


//getters e setters
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preço = preco;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,

        get: function(){
            return estoque;
        },

        set: function(value){
            if(typeof value !== "number"){
                throw new TypeError("This's a not number");
            }
            return;
        }
    });
}

const p3 = new Produto("Sapato", 20, 8);
p3.estoque = 501;
console.log(p3.estoque);

//getters e setters na factory function

function criaProduto(nome){
    return {
        get nome(){
            return nome;
        },

        set nome(valor){
            nome = valor;
        }
    }
}

const p4 = criaProduto("Margarina");
console.log(p4.nome);

p4.nome = "Manteiga";
console.log(p4.nome);


//apagar uma parte do dado dentro do set
function criaProduto(nome){
    return {
        get nome(){
            return nome;
        },

        set nome(valor){
            valor = valor.replace("Manteiga", "Margarina");  //substituí o nome manteiga por margarina
            nome = valor;
        }
    }
}

const p4 = criaProduto("Margarina");
console.log(p4.nome);

p4.nome = "Manteiga";
console.log(p4.nome);