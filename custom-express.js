const express = require('express')
const app = express()

// Arquivos: https://github.com/MarcoBrunoBR/arquivos-js35/
// Baixa os arquivos
// Cola na pasta do projeto
// #Desafio faz o for of dos produtos
app.use(
    express.static('./public')
) // Mapeia arquivos estáticos

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const expressValidator = require('express-validator')
app.use(expressValidator())


// app.use(function(request,response, next) {
//     response.header('Access-Control-Allow-Origin', '*')
//     response.header('Access-Control-Allow-Methods', 'OPTIONS, POST, DELETE')
//     response.header('Access-Control-Allow-Headers', 'Origin, Accept, Content-type')
//     next()
// })
const cors = require('cors') // npm install cors
app.use(cors())

app.set('view engine', 'ejs')



// Rotas aqui, cada rota exporta uma function
// require('./routes/home')(app)
// require('./routes/produtos')(app)
// Autoload
const consign = require('consign');
consign()
    .include('routes')
    // .then('infra')
    .into(app);

console.log(app.infra) 


app.use(function(req,res, next) {
    next('X')
    // console.log('Página não encontrada')  
    res.status(404).send('<h1>Página 404</h1>')
})


app.use(function(err, req, res, next) {
    res.status(500).send('Erro brutal do servidor')
})


module.exports = app