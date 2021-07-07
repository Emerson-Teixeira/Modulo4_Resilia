module.exports = (app) =>{
    app.get('/users',(req,res)=>{
        res.send('Rota ativada com GET e recurso usuarios: valores de usuarios devem ser retornados!')
    })
    app.post('/users',(req,res)=>{
        res.send('Rota POST de usuario ativada: usuário adicionado ao banco de dados!')
    })
}