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



const promises = [
    espera('Promise 1', rand(1,3)),
    espera('Promise 2', rand(1,3)),
    espera('Promise 3', rand(1,3)),
];

// se houver alguma promise rejeitada é retornado um erro 
// e não um array de promises resolvidas.

//Promise All ==> entrega todas as promesas com os valores dentro de um array;
Promise.all(promises).then(dados => console.log(dados))

//Retorna a primeira promise resolvida do array;
Promise.race(promises).then(dados => console.log(dados))