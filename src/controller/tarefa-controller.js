module.exports = (app) =>{
    app.get('/tasks',(req,res)=>{
        res.send('Rota ativada com GET e recurso tarefas: valores de tarefas devem ser retornados')
    })
    
    app.post('/tasks',(req,res)=>{
        res.send('Rota POST de Tarefas ativada: Tarefa adicionada ao banco de dados!')
    })
}