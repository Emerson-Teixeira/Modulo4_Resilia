const app = require('./app')

//Listen
app.listen(process.env.PORT,()=>{
    console.log('Servidor rodando na porta: '+ 3056)
})