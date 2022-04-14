const mongoose = require('mongoose');

const Mongoose = mongoose.connect('mongodb+srv://pekrul:Caramelo20061992@cluster0.6lqd4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
      console.log("Conexão com MongoDB realizada com sucesso!");
  }).catch((erro) => {
      console.log("Erro: Conexão com MongoDB não foi realizada com sucesso!");
  });

  module.exports= Mongoose;
  