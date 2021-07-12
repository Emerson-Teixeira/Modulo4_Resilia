var idUser = 0;
class User{
    constructor(nome,email,senha){
        this.id = idUser++;
        this.nome = nome;
        this.senha = senha;
        this.email = email;
    }
}

module.exports = User