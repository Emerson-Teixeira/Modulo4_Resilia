const Tasks = require('../models/TaskModel')

module.exports = (app,db) =>{
    app.get('/tasks',(req,res)=>{
        res.json({
            result:db.tasks,
            count:db.tasks.length
        })
    })

    app.post('/tasks',(req,res)=>{
        const {titulo,data,status,descricao} = req.body
        let newTasks =  new Tasks(titulo,data,status,descricao)
        db.tasks.push(newTasks)
        res.json({
            message:'Tarefa criada com sucesso',
            error:false
        })
    })
}
