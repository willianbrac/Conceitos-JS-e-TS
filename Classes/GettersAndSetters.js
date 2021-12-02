//Simbol serve para criar uma chave privada dentro do objeto
//essa propriedade não pode ser acessada de fora do objeto
//por isso é necessário utilizar getters e setters
//this.velocidade = 0 foi substituido por this[_velocidade] = 0;


const _velocidade = Symbol('velocidade'); 

class Carro {
    constructor(modelo){
        this.modelo = modelo;
        this[_velocidade] = 0;
    }

    get velocidade(){
        return this[_velocidade];
    }

    set velocidade(value){
        if(typeof value !== "number")return;
        if(valor >= 100 || valor <= 0)return;
        this[_velocidade] = value;
    }

    acelerar(){
        if(this[_velocidade] >= 100){
            return;
        }
        this[_velocidade]++
    }

    freiar(){
        if(this[_velocidade] <= 0){
            return;
        }
        this[_velocidade]--
    }
}

const Carro1 = new Carro("Chevette");

/*
 for (let i = 0; i <= 200; i++) {
    Carro1.acelerar();
 }
*/
 

//Setter
Carro1.velocidade = 80;

//Getter
console.log(Carro1.velocidade);