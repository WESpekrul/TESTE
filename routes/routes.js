const { Router } = require('express');
const express = require('express') 
const routes = express.Router()
const Usuario = require ('../controllers/usuario-controllers')

// USUARIO CRUD - CREAT - RELEASE - UPDATE - DELETE

routes.get('/', Usuario.main);
routes.get('/listarusuarios/', Usuario.index);
routes.get('/listarusuario/:_id', Usuario.details);
routes.post('/cadusuario/', Usuario.create);
routes.delete('/delusuario/:_id', Usuario.delete);
routes.put('/editusuario/', Usuario.update);

module.exports= routes;