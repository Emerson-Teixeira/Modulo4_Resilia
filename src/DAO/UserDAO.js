class UserDAO {
  constructor(db) {
    this.db = db;
  }

  getAllUsers() {
    return new Promise((resolve, reject) => {
      this.db.all("Select * from USUARIOS", (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  getUser(id) {
    return new Promise((resolve, reject) => {
      this.db.get("Select * from USUARIOS where id = ?", id, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  insertUser(user) {
    return new Promise((resolve, reject) => {
      this.db.run(
        `INSERT INTO USUARIOS(nome,email,senha) VALUES (?,?,?)`,
        Object.values(user),
        (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        }
      );
    });
  }

  deleteUser(userId) {
    return new Promise((resolve, reject) => {
      this.db.run(`delete from USUARIOS where id = ?`, userId, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  updateUser(id, nome, email, senha) {
    if (nome || email || senha) {
      let virgula = false
      let newArray = []
      let sql = 'UPDATE USUARIOS SET '
      if(nome){
        sql = sql + ' NOME = ?'
        virgula = true
        newArray.push(nome)
      }
      if(email){
        if(virgula)
          sql = sql  +',EMAIL = ?'
        else{
          sql = sql  +'EMAIL = ?'
          virgula = true
        }
        newArray.push(email)
      }
      if(senha){
        if(virgula)
          sql = sql  +',SENHA = ?'
        else{
          sql = sql  +'SENHA = ?'
          virgula = true
        }
        newArray.push(senha)
      }
      sql = sql + 'WHERE id = ?'
      newArray.push(id)
      return new Promise((resolve, reject) => {
        this.db.run(sql, newArray, (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      });
    }
    else
    throw new Error('Nenhum atributo (Nome, email ou senha) enviado')
  }
}

module.exports = UserDAO;
