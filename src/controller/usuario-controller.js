const User = require("../models/UserModel");
const UserDAO = require('../DAO/UserDAO');
module.exports = (app, db) => {
  let userBanco = new UserDAO(db)

  app.get("/users", (req, res) => {
<<<<<<< HEAD
      userBanco.getAllUsers()
      .then((rows) =>{
=======
    db.all("Select * from USUARIOS", (err,rows) =>{
      if(err){
        res.json({
          message:"Error ao obter usuarios",
          error:true
        })
      }
      else{
>>>>>>> 0539bcb0272707594926b0798df9a1fee529708b
        res.json({
          result:rows,
          count:rows.length
        })
<<<<<<< HEAD
      })
      .catch((err)=>{
        res.json({err})
      })
=======
      }
    })
>>>>>>> 0539bcb0272707594926b0798df9a1fee529708b
  });

  app.get("/users/:email", (req, res) => {
    let arrayResposta = db.users.filter((element) => {
      return element.email === req.params.email;
    });
    res.json({
      result: arrayResposta,
      count: arrayResposta.length,
    });
  });

  app.post("/users", (req, res) => {
    const { nome, email, senha } = req.body;
    let newUser = new User(nome, email, senha)
    userBanco.insertUser(newUser)
      .then(() =>{
        res.json({
          message:'Usuario inserido com sucesso',
          error:false
        })
      })
      .catch((err)=>{
        console.log(err)
        res.json({
          message:'Erro inserido com sucesso',
          error:true
        })
      })
  });

  app.delete("/users/:email", (req, res) => {
    let countArray = db.users.length;

    db.users = db.users.filter((element) => {
      return element.email !== req.params.email;
    });

    if (countArray === db.users.length) {
      res.json({
        message: `não existe usuario com esse email ${req.params.email}`,
        error: true,
      });
    } else {
      res.json({
        message: `Usuario com o email: ${req.params.email} deletado com sucesso`,
        error: false,
      });
    }
  });

  app.put("/users/:email", (req, res) => {

    const { nome, email, senha } = req.body;
    var varQnt = 0;
    if (nome || email || senha) {
      db.users.forEach((element) => {
        if (element.email === req.params.email) {
          if (nome) {
            element["nome"] = nome;
          }
          if (email) {
            element["email"] = email;
          }
          if (senha) {
            element["senha"] = senha;
          }
          varQnt++;
        }
      });
      if (!varQnt) {
        res.json({
          message: "Não existe nenhum usuario com esse email",
          error: true,
        });
      } else {
        res.json({
          message: `Usuarios com email ${req.params.email} alterado`,
          error: false,
          count: varQnt,
        });
      }
    } else {
      res.json({
        message:
          "Não foi possivel atualizar o usuario, nenhum campo valido foi passado ( Esperado {nome,email,senha} )",
        error: true,
      });
    }
  });
};
