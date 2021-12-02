class Dispositivo {
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado) return this.ligado = true;
    }

    desligar(){
        if(!this.ligado) return this.ligado = false;
    }

}

const Dispositivo1 = new Dispositivo('Tablet');
Dispositivo1.ligar;
Dispositivo1.desligar;

class Smatphone extends Dispositivo{
    constructor(nome, cor, modelo){
       super(nome); 
       
       this.cor = cor;
       this.modelo = modelo;
    }
}

const Smart1 = new Smatphone('Xaiaomi', "Azul", "MI1");
console.log(Smart1);