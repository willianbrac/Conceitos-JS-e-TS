//são metodos acessiveis na classe sem acessar a classe
//não se referem a instância da classe

class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume(){
        this.volume += 2;
    }

    //método de instância
    diminuirVolume(){
        this.volume -= 2;
    }

    //método estático
    static trocaPilha(){
        console.log("pilha trocada");
    }
}

const controle1 = new ControleRemoto('AOC');
controle1.aumentarVolume();

console.log(controle1);

//controle1.trocaPilha  -->   "isso não funciona"

ControleRemoto.trocaPilha();  // --> jeito certo