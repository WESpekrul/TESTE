const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const routes = require ('./routes/routes')
const cookieParser = require ('cookie-parser')
const cors = require ('cors')

app.use(cookieParser())
app.use(cors())

//Arquivos CSS Publicos
app.use('/static', express.static(__dirname + '/public'))
app.use(express.static('public'))

//Config Template Engine
app.engine('handlebars',handlebars({
  defaultLayout: 'main',
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
},}))

app.set('view engine', 'handlebars')

//Config Body-Parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.json())
app.use(routes)

app.listen(8080, () =>{
    console.log("Servidor iniciado na porta 8080: http://localhost:8080/");
});