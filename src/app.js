const express = require('express')
const cors = require('cors')
//Configs
const app = express()
const port = 3056

//Import Router
const rotasUsuarios = require('./controller/usuario-controller')
const rotasTarefas = require('./controller/tarefa-controller')

//Import DB
const db = require('./infra/sqlite-db')

//Middlewares
app.use(express.json())
app.use(cors())

//Usando Rotas
rotasUsuarios(app,db)
rotasTarefas(app,db)

module.exports = app