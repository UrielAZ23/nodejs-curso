// archivos
const fs = require('fs'); 
function leer(ruta, cb){
    fs.readFile(ruta,(err, data)=>{
        cb(data.toString())
    })
}

function escribir(ruta,contenido, cd){
    fs.writeFile(ruta,contenido,function(err, data){
        if(err){
            console.error("no se ha podido escribirlo",err)
        }else{
            console.log("se ha escrito correctamente");
        }
    })
}

function borrar(ruta, cb){
    fs.unlink(ruta, cb);
}


// leer(__dirname+'/archivo1.txt', console.log)
// escribir(__dirname+'/archivo1.txt','holis',console.log)
// borrar(__dirname+'/archivo1.txt' ,console.log)
