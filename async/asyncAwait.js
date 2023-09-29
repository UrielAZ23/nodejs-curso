async function hola(nombre){
    // console.log("Hola, soy una funcion asincrona");
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            // console.log("Estoy siendo asincrona");
            console.log("Hola, "+ nombre);
            resolve(nombre);
        },1000)

    })
}

async function hablar(nombre){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            console.log("bla bla bla..")
            resolve(nombre);
        },1000)

    })
}

async function adios(nombre){

    return new Promise((resolve,reject)=>{
        setTimeout(function(){
           console.log("adios, "+ nombre)
           resolve(nombre);
        },1000)
        // resolve(nombre);

    })
}

async function main(){
    let nombre = await hola("Uriel")
    await hablar()
    await hablar()
    await adios(nombre);
    console.log("Termina el proceso")

}
console.log("Emprezamos el proceso")
main()