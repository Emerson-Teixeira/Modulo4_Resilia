//Imports
const express = require('express')
//Configs
const app = express()
const port = 3056

//Import Router
const rotasUsuarios = require('./controller/usuario-controller')
const rotasTarefas = require('./controller/tarefa-controller')

//Middlewares
app.use(express.json())

//Usando Rotas
rotasUsuarios(app)
rotasTarefas(app)


//Listen
app.listen(port,()=>{
    console.log('Servidor rodando na porta: '+ port)
})