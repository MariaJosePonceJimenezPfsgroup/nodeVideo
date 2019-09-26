//creará un token encriptado temporal

const jwt = require ('jsonwebtoken');
const clave = "mi_clave_secreta";
//encode coje nuestra información y la encripta
exports.encode = function (user){

    let playload = {
        nombre: user.nombre,
        email: user.email,
        role: user.role,
        iat: Date.now(), //fecha en la que se genera el token (devuelve milisegundos)
        exp: (Date.now() + (1000*60*60))// fecha en la que expira (hacemos el cálculo)
    }

    var token = jwt.sign(playload, clave);
    console.log('token', token);
    return token;
} 

exports.decode= function (token){
    let respuesta = jwt.decode(token, clave);
    return respuesta;
}