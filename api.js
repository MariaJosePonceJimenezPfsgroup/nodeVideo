const express = require('express');
const api = express();
const userRoutes = require('./routes/usersRoutes');
const movieRoutes = require('./routes/movieRoutes');

api.use('/users',userRoutes);
api.use('/movies', movieRoutes);

//para hacer pruebas de los métodods de req
/*api.use('/pruebas', function(req, res){
    req.body;
})*/





module.exports = api;