const express = require('express')
const mongoose = require('mongoose')

const routes = require ('./routes')

const app  = express()

mongoose.connect('mongodb+srv://aircnc:aircnc@aircnc-naiz6.mongodb.net/aircnc?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})  // => Conectando com mongodb

//GET, POST, PUT, DELETE

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição ou delete)
// req.body = Acessar corpo da requisição (para criação ou edição de registros)

/*
app.get('/users', (req, res) => {
  return res.json({idade : req.query.idade})
})

app.put('/users/:id', (req, res) => {
  return res.json({idade : req.params.id})
})
*/

app.use(express.json())  // => Adiciona formato JSON para o retorno das req.
app.use(routes)

app.listen(3333)