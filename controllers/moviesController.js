const movie = require('../models/moviesModel');

function list(req, res){

    movie.find({}).populate('user').exec(function (error, movies){
        if(error){
            return res.status(400).json({'error': error});
        }
        if (movies){
            return res.status(400).json({'movies': movies});

        }else{
            return res.status(400).json({'error': 'no se pueden mostrar películas'});
        }
    });
}

function listMovieUser(req, res){

    movie.find({}).populate('user').exec(function (error, movies){
        if(error){
            return res.status(400).json({'error': error});
        }
        if (movies){
            return res.status(400).json({'movies': movies});

        }else{
            return res.status(400).json({'error': 'no se pueden mostrar películas'});
        }
    });
}

    function create (req, res){
       
        if( !req.body.movie){
            return res.status(400).json({'error': 'Faltan parámetros'});
        }else{
           let body = req.body.movie; 
            //console.log('body',body);
           let newMovie = new movie(body);

           newMovie.save()
           .then( ()=>{
            return res.status(400).json({'message': 'movie creada', 'movie': newMovie});
           })
           .catch(error => {
            return res.status(400).json({'error': 'no se ha podido crear la película'});
           })
        }
    }
    

    function update (req, res){
  
        if( !req.query.id){
            return res.status(400).json({'error': 'Faltan parámetros movie'});
        }else{
            let id= req.query.id;
            let body = req.body.movie;

            movie.updateOne( {_id: id}, {$set: body}, function (error, movieupdate){
                if(error){
                    return res.status(400).json({'error': 'error en movie update', 'movi': newMovie});
                }
                if(movieupdate){
                    return res.status(400).json({'message': 'película actualizada'});
                }
            });
        }
    }

    function borrar (req, res){
        
        if( !req.query.id){
            return res.status(400).json({'error': 'Faltan parámetros movie'});
        }else{
            let id= req.query.id;
            

            movie.deleteOne( {_id: id}, function (error, movieDelete){
                if(error){
                    return res.status(400).json({'error': 'error en movie borrar'});
                }
                if(movieDelete){
                    return res.status(200).json({'message': 'película borrada', 'movie': movieDelete});
                }
            });
            }
    
        }


    module.exports = {
        list,
        create,
        update,
        borrar
    }

