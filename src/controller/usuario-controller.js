const User = require('../models/UserModel')

module.exports = (app,db) =>{

    app.get('/users',(req,res)=>{
        res.json({
            result:db.users,
            count:db.users.length
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
}