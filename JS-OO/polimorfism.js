
// superclass
function Conta(conta, numero, saldo){
    this.conta = conta;
    this.numero = numero;
    this.saldo = saldo;
}

Conta.prototype.sacar = (valor) => {
    if (this.saldo < valor){
        this.verSaldo();
        throw new console.error("Saldo insuficiente");
    }
    this.saldo -= valor;
}

Conta.prototype.depositar = (valor) => {
    this.saldo += valor;
    this.verSaldo();
}

Conta.prototype.verSaldo = () => {
    return this.saldo;
}

const acc1 = new Conta(12, 1212, 250);


//herança - subclasse
function ContaCorrente(conta, numero, saldo){
    Conta.call(this, conta, numero, saldo);
    this.limite = limite;
}

//Linkando a super na sub
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

//sobrescrevendo o método
ContaCorrente.prototype.sacar = (valor) => {
    if ((this.saldo + this.limite) < valor){
        this.verSaldo();
        throw new console.error("Limite excedido");
    }
    this.saldo -= valor;
}

//instânciando 
const Cc1 = new ContaCorrente(001, 9192, 1000, 3000);

Cc1.depositar(1400);
Cc1.sacar(5000);





//conta poupança

function ContaPoupanca(conta, numero, saldo){
    Conta.call(this, conta, numero, saldo);
}

//Linkando a super na sub
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

//instânciando 
const Cc1 = new ContaPoupanca(002, 9192, 10);