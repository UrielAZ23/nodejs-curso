function hola(nombre){
    // console.log("Hola, soy una funcion asincrona");
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            // console.log("Estoy siendo asincrona");
            console.log("Hola, "+ nombre);
            resolve(nombre);
        },1000)

    })
}

function habalar(nombre){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            console.log("bla bla bla..")
            resolve(nombre);
        },1000)

    })
}

function adios(nombre){

    return new Promise((resolve,reject)=>{
        setTimeout(function(){
           console.log("adios, "+ nombre)
        },1000)
        // resolve(nombre);
        reject("hay un error");

    })
}

// --

console.log("Iniciando el proceso")
hola("Uriel")
.then(adios)
.then(habalar)
.then(habalar)
.then(habalar)
.then(nombre=>{
    console.log("terminado el proceso")
    console.log(nombre);
})
.catch(error=>{
    console.log("ha habido un error")
    console.log(error)
})