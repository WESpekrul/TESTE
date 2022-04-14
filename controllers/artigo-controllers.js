require("../models/db");
require("../models/Artigo");
const mongoose = require('mongoose');



const Artigo = mongoose.model('artigo');

exports.getArtigos = (req, res) => {    
    Artigo.find({}).then((artigo) => {
        return res.json(artigo);
    }).catch ((erro) => {
        return res.status (400).json({
            error: true,
            message: "Nenhum artigo encontrado ! "
        })
    })
};

exports.getFormartigo = (req, res) => {  
    res.render('formulario')
};

exports.getArtigo = (req, res) => {    
    Artigo.findOne({_id:req.params.id}).then((artigo) => {
        return res.json(artigo);
    }).catch ((erro) => {
        return res.status (400).json({
            error: true,
            message: "Nenhum artigo encontrado ! "
        })
    })
};

exports.postArtigo = (req, res) => {
    const artigo = Artigo.create(req.body, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Error: Artigo não foi cadastrado com sucesso!"
        });
         
        return res.status(200).json({
            error: false,
            message: "Artigo cadastrado com sucesso!",
                     
        })
        
    });
    console.log("Cadastrado com Sucesso");
};

exports.putArtigo = (req, res) => {
    const artigo = Artigo.updateOne({_id: req.params.id}, req.body, (err) => {
        if (err) return res.status(400).json ({
            error: true,
            message: "Error : Artigo não foi editado com sucesso ! "
        });
        return res.json ({ 
            error: false,
            message: "Artigo editado com sucesso !"
        });    
    });
};

exports.deleteArtigo = (req, res) => {
    const artigo = Artigo.deleteOne({_id: req.params.id}, req.body, (err) => {
        if (err) return res.status(400).json ({
            error: true,
            message: "Error : Artigo não foi Apagado com sucesso ! "
        });
        return res.json ({ 
            error: false,
            message: "Artigo apagado com sucesso !"
        });    
    });
};

