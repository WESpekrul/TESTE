require("../models/db");
require("../models/Formulario");
const Imagem = require ('../models/Imagem');
const upload = require ('../middlewares/uploadImage');

const mongoose = require('mongoose');

const Formulario = mongoose.model('formulario');

exports.getFormformulario = (req, res) => {  
    res.render('FormularioCad')
};
exports.getFormularios = (req, res) => {    
    Formulario.find({}).then((formulario) => {
        return res.json(formulario);
    }).catch ((erro) => {
        return res.status (400).json({
            error: true,
            message: "Nenhum Formulario encontrado !"
        })
    })
};
exports.getFormulario = (req, res) => {    
    Formulario.findOne({_id:req.params.id}).then((formulario) => {
        return res.json(formulario);
    }).catch ((erro) => {
        return res.status (400).json({
            error: true,
            message: "Nenhum Formulario encontrado ! "
        })
    })
};

/*exports.postFormularioo = (upload.single('ftcrr'), async (req, res) => {
        Formulario.create({
            aprendido: req.body.aprendido,
            numcrr: req.body.numcrr,
            ftcrr: req.file.ftcrr,
            placa: req.body.placa,
            guincheiro: req.body.guincheiro,
            pfXguincho: req.body.pfXguincho
        })
            .then(function () {
                const imagem = Imagem.create({ image: req.file.filename, crr: req.body.numcrr });

                res.redirect('/listformulario/');
            })
            .catch(function () {
                res.send("Houve um Erro" + erro);
            });
    });*/

exports.postFormulario = (req, res) => {
    const formulario = Formulario.create(req.body, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Error: Formulario não foi cadastrado com sucesso!"
        });
         
        return res.status(200).json({
            error: false,
            message: "Formulario cadastrado com sucesso!",
                     
        })
        
    });
    console.log("Cadastrado com Sucesso");
};
exports.putFormulario = (req, res) => {
    const formulario = Formulario.updateOne({_id: req.params.id}, req.body, (err) => {
        if (err) return res.status(400).json ({
            error: true,
            message: "Error : Formulario não foi editado com sucesso ! "
        });
        return res.json ({ 
            error: false,
            message: "Formulario editado com sucesso !" 
        });    
    });
};
exports.deleteFormulario = (req, res) => {
    const formulario = Formulario.deleteOne({_id: req.params.id}, req.body, (err) => {
        if (err) return res.status(400).json ({
            error: true,
            message: "Error : Formulario não foi Apagado com sucesso ! "
        });
        return res.json ({ 
            error: false,
            message: "Formulario apagado com sucesso !"
        });    
    });
};

