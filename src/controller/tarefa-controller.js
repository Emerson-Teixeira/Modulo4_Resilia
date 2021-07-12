const Tasks = require('../models/TaskModel')
module.exports = (app,db) =>{
    app.get('/tasks',(req,res)=>{
        res.json({
            result:db.tasks,
            count:db.tasks.length
        })
    })

    app.post('/tasks',(req,res)=>{
        const {titulo,data,status,descicao} = req.body
        let newTasks =  new Tasks(titulo,data,status,descicao)
        db.tasks.push(newTasks)
        res.json({
            message:'Tareda criada com sucesso',
            error:false
        })
    })
}
