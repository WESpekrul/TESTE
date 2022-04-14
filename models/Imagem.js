const mongoose = require('mongoose');

const Imagem = new mongoose.Schema({
    imagem: {
        type: String,
        required: true
    },
    crr: {
        type: String,
        required: true
    }
})        

mongoose.model('imagem', Imagem);



