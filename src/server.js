const express = require('express')
const app = express()

const port = 3056
const rotasUsuarios = require('./controller/usuario-controller')
const rotasTarefas = require('./controller/tarefa-controller')

rotasUsuarios(app)
rotasTarefas(app)

app.listen(port,()=>{
    console.log('Servidor rodando na porta: '+ port)
})