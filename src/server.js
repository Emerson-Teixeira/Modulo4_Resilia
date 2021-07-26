const app = require('./app')

//Listen
app.listen(process.env.PORT||3056,()=>{
    console.log(`Servidor rodando na porta: ${process.env.PORT||3056}`)
})

