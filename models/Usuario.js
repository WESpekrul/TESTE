const mongoose = require ('mongoose')

const Usuario = new mongoose.Schema({
    nome: String,
    email: String,
    tipo: {type: Number, default: 1},
    senha: String,
},{
    timestamps: true,
});
/*
Usuario.pre('save', function (next){
    if(this.isModified("senha")){
        return next();
    }
    this.senha = bcrypt.hashSync(this.senha, 10);

});
*/
const usuarios = mongoose.model('Usuarios', Usuario);
module.exports = usuarios;