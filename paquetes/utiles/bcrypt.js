const bcript = require('bcrypt')

const password = '1234Segura!';

bcript.hash(password,5,function(err, hash){ //se genera el pasword
    console.log(hash)
    bcript.compare(password,hash, function(err,resul){ // se compara la password
        console.log(resul)
    })
});
