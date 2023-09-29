const http = require('http');

http.createServer(router).listen(3000)

function router(req, res){
    console.log("nueva peticion")
    console.log(req.url)
    switch(req.url){
        case '/hola':
            res.write('holis que tal')
            res.end();
            break;
        default:
            res.write('error 404')
            res.end();
    }

//     res.writeHead(201,{'Content-Type':'text/plain'})
// res.write("Hola, ya se usar http de NodeJS")

//     res.end();
}

console.log("escuchando http en el puerto 3000")