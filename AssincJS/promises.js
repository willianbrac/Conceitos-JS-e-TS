function rand(min, max){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)

}


//estas funções são executadas fora de ordem 
//vale aquela que terminar primeiro
function espera(msg, tempo){
    
    return new Promise((resolve, reject) => {

        if(typeof msg !== 'string') reject("bad value")
        setTimeout(()=>{
            resolve(msg)
        }, tempo)
    })
}
espera("msg 2", rand(1, 3))
espera("msg 3", rand(1, 3))
    


//usando promises
espera("msg 1: conexão com o DB", rand(1, 3))
.then((resposta) => {
    console.log(resposta);
    return espera("msg 2: Buscando dados na Base", rand(1, 3));
})
.then(resposta => {
    console.log(resposta);
    return espera("msg 3: Tratando os dados", rand(1, 3));
})
.then(resposta => {
    console.log(resposta);
})
.catch(Err => {
    console.log(Err);
});



console.log("Executa antes das promises");

