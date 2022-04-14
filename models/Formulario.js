const mongoose = require('mongoose');

const Formulario = new mongoose.Schema({
    apreendido: {
        type: String,
        required: true
    },
    numcrr: {
        type: String,
        required: true
    },
    ftcrr:{
        type: String,
        required: true
    },
    placa:{
        type: String,
        required: true
    },
    guincheiro:{
        type: String,
        required: true
    },
    pfxguincho:{
        type: String,
        required: true
    },
    ft1:{
        type: String,
        required: true
    },
    ft2:{
        type: String,
        required: true
    },
    ft3:{
        type: String,
        required: true
    },
    ft4:{
        type: String,
        required: true
    },
    av1:{
        type: String,
        required: true
    },
    av2:{
        type: String,
        required: true
    },
    av3:{
        type: String,
        required: true
    },
    av4:{
        type: String,
        required: true
    },
    av5:{
        type: String,
        required: true
    }
},
{
    timestamps: true,
});

mongoose.model('formulario', Formulario);