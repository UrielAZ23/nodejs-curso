function otrafuncion(){
    return serompe()
}

function serompe(){
     return 3 +z
    }
    
    function seRompeAsincrona(cb){
        setTimeout(function(){
            try {
                return 3 +z
                
            } catch (error) {
                console.log("error en mi funcion asincrona")
                cb(error)
            }
    },1000)
}

try {
    // otrafuncion()
    seRompeAsincrona(function(error){
        console.log("Hay error")
    })
    
} catch (error) {
    console.error("se va a romper",error)
    console.log("pero no pasa nada, lo hemos capturado")
}

console.log("esto esta abajo del roto")