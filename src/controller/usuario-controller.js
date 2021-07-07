module.exports = (app) =>{
    app.get('/users',(req,res)=>{
        res.send('Rota ativada com GET e recurso usuarios: valores de usuarios devem ser retornados')
    })
}