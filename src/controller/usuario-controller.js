const User = require('../models/UserModel')

module.exports = (app,db) =>{

    app.get('/users',(req,res)=>{
        res.json({
            result:db.users,
            count:db.users.length
        })
    })

    app.get('/users/:email',(req,res)=>{

        let arrayResposta = db.users.filter((element) => {
            return element.email === req.params.email
        })
        res.json({
            result:arrayResposta,
            count: arrayResposta.length
        })
    })

    app.post('/users',(req,res)=>{

        const {nome,email,senha} = req.body

        let newUser =  new User(nome,email,senha)
        db.users.push(newUser)
        res.json({
            message:'Usuario criado com sucesso',
            error:false
        })
    })

    app.delete('/users/:email',(req,res)=>{
        let countArray = db.users.length
        db.users = db.users.filter((element) => {
            return element.email !== req.params.email
        })
        if(countArray === db.users.length ){
            res.json({
                message:`não existe usuario com esse email ${req.params.email}`,
                error: true
            })
        }
        else{
            res.json({
                message:`Usuario com o email: ${req.params.email} deletado com sucesso`,
                error: false
            })
        }
        
    })
}
