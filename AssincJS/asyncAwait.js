function espera(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string'){
            reject(false);
            return;
        }

        setTimeout(() => {
            resolve(msg + ' passado na promise');
        }, tempo);
    })
}

function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max-min)+min);
}

//usando promise como algo sincrono
/*
    espera('Promise 1', rand(1,3)).then(valor => {
        console.log(valor);
        return espera('Promise 2', rand(1,3));
    }).then(valor2 => {
        console.log(valor2);
        return espera('Promise 3', rand(1,3));
    }).then(valor3 => {
        console.log(valor3);
    }).catch(err => console.log(err));

Promise.all(promises).then(dados => console.log(dados));

*/

async function executa(){
    try {
        const promise1 = await espera('Promise 1', rand(1,3)); console.log(promise1);
        const promise2 = await espera('Promise 2', rand(1,3)); console.log(promise2);
        const promise3 = await espera('Promise 3', rand(1,3)); console.log(promise3);    
    } catch (error) {
        console.log(error);
    }
}

executa();

//dentro do try o await executa as funções até achar o erro


//promise pendding -> chama a promise antes de ela ter sido finalizada.
const pendente = espera("MSG da promise", 10000);
console.log(pendente);