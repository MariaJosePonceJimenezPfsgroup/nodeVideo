const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const movieSchema = Schema({
    titulo: {
        type: String,
        required:[true, 'El título es necesario']
    },
    descripcion: {
        type: String,
        unique: true,
        required: [true, 'La descripción es necesaria']
    },
    imagen: String,
    user: { type: Schema.ObjectId, ref: 'user' }
});


module.exports = mongoose.model('movie', movieSchema);
