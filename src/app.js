const express = require('express')
//Configs
const app = express()
const port = 3056

//Import Router
const rotasUsuarios = require('./controller/usuario-controller')
const rotasTarefas = require('./controller/tarefa-controller')

//Import Models n DB
const User = require('./models/UserModel')
const Task = require('./models/TaskModel')
const db = require('./infra/sqlite-db')

//Middlewares
app.use(express.json())

//Usando Rotas
rotasUsuarios(app,db)
rotasTarefas(app,db)

module.exports = app