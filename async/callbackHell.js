function hola(nombre, miCallback){
    // console.log("Hola, soy una funcion asincrona");
    setTimeout(function(){
        // console.log("Estoy siendo asincrona");
        console.log("Hola, "+ nombre);
        miCallback(nombre);
    },1000)
}

function habalar(callbackHablar){
    setTimeout(function(){
        console.log("bla bla bla..")
        callbackHablar();
    },1000)
}

function adios(nombre, callback){
 setTimeout(function(){
    console.log("adios, "+ nombre)
 },1000)
 callback();
}
//--
function conversacion(nombre, veces,callback){
    if(veces>=0){
        habalar(function(){
            conversacion(nombre,--veces,callback);
        })
    }else(
        adios(nombre,callback)
    )
}

console.log("iniciando proceso");
    hola("Uriel", function(nombre){
        conversacion(nombre,3, function(){
            console.log("Proceso terminado")
        })
        console.log("terminamos");
    })


    // hola("Uriel",function(){

//     habalar(function(){
//     habalar(function(){
//     habalar(function(){
//         adios("Uriel",function(){
//             console.log("terminando proceso");
            
//         })
//         })
//         })
//     })
//     // console.log("hola")
// });