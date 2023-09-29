process.on('beforeExit',()=>{
    console.log("el proceso va a terminar")
})


process.on('exit',()=>{
    console.log("el proceso ha acabado")
    setTimeout(()=>{
        console.log("esto nunca se va a ver")
    },0 )
})

// process.on('oncaughtException') excepciones no capturadas
// process.on('oncaughtRejection') promesas que se rechazaron
process.on('uncaughtException',(error,origen)=>{
    console.error("se nos olvido capturar un error")
    console.error(error)

})

// functionnoexiste()

console.log("esto deberia de aparecer")