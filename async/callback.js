function hola(nombre, miCallback){
    // console.log("Hola, soy una funcion asincrona");
    setTimeout(function(){
        // console.log("Estoy siendo asincrona");
        console.log("Hola, "+nombre);
        miCallback();
    },1000)
}

function adios(nombre, callback){
 setTimeout(function(){
    console.log("adios, "+nombre)
 },1000)
 callback();
}


console.log("iniciando proceso");
hola("Uriel",function(){
    adios("Uriel",function(){
        console.log("terminando proceso");
        
    })

});