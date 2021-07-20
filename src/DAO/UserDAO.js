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

  insertUser(user) {
    return new Promise((resolve, reject) => {
      this.db.run(
        `INSERT INTO USUARIOS(nome,email,senha) VALUES (?,?,?)`,
        Object.values(user),
        (err) => {
          if (err) {
            reject(err);
          } else {
            resolve(true);
          }
        }
      );
    });
  }
}

module.exports = UserDAO;
