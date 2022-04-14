require("../models/db");
const Usuario = require('../models/Usuario');

module.exports = {
                    main(req, res){
                        res.json({message:"Teste 1"});
                    },                
                    async index(req, res){
                        const user = await Usuario.find({});
                        res.json(user);
                    },
                    async create(req, res){
                        
                        const {nome, email, tipo, senha} = req.body;
                        
                        let data ={};

                        let user = await Usuario.findOne({email:email});                        

                        if(!user){
                            data = {nome, email, tipo, senha};
                            user = await Usuario.create(data);

                            return res.status(200).json(
                                
                                {                            
                                error: false,
                                message: "Ok cadastrado"                                  
                            }                            
                            ) 
                        }                        
                        else{                          
                            return res.status(500).json(
                               
                                {                            
                                error: true,
                                message: "Usuario já cadastrado",                                                               
                            }
                                                        
                            ) 
                        
                    }
                },

                    async details (req, res){    
                        await Usuario.findOne({_id:req.params._id})
                        .then((user) => {
                            return res.json(user);
                        }).catch ((erro) => {
                            return res.status (400).json({
                            error: true,
                            message: "Nenhum usuario encontrado ! "
                            })
                        })
                    },
                    async delete (req,res){
                        const {_id} = req.params;
                        const user = await Usuario.findByIdAndDelete({_id})
                        return res.json(user);                   
                    },
                    async update (req,res){
                        const { _id, nome, email, tipo, senha} = req.body;
                        const data = {nome, email, tipo, senha};
                        
                        const user = await Usuario.findByIdAndUpdate({_id},data,{new: true});

                        return res.json(user);
                    }
}
      