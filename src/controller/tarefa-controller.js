module.exports = (app) =>{
    app.get('/tasks',(req,res)=>{
        res.send('Rota ativada com GET e recurso tarefas: valores de tarefas devem ser retornados')
    })
    
    app.post('/tasks',(req,res)=>{
        console.log(req.body)
        res.json({
            message:"Rota ativada com Post e recurso tarefas: valores de tarefas devem ser retornados",
            body:req.body
        })
    })
}