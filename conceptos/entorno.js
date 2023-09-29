// variables de entorno

// powerShell primero se agrega la variable
// $env:NOMBRE="URIEL"
// Luego se llama el proceso
// node entorno.js
// Las variables de entorno vienen de afuera

let nombre = process.env.NOMBRE || 'sin comentarios'
let web = process.env.WEB || 'no tiene web'

console.log("Hola " +nombre);
console.log("Mi web es:  " +web);


// nodemon

// npm i -g nodemon
// nodemon [archio]