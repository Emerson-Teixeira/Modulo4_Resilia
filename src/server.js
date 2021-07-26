const app = require('./app')

//Listen
app.listen(process.env.PORT,()=>{
    console.log('Servidor rodando na porta: '+ process.env.PORT)
})