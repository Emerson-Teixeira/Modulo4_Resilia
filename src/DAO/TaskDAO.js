class TaskDAO {
    constructor(db) {
      this.db = db;
    }
  
    getAllTasks() {
      return new Promise((resolve, reject) => {
        this.db.all("Select * from TAREFAS", (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        });
      });
    }
  
    getTask(id) {
      return new Promise((resolve, reject) => {
        this.db.get("Select * from TAREFAS where ID = ?", id, (err, rows) => {
            console.log(rows)
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        });
      });
    }
  
    insertTask(tasks) {
        console.log(tasks)
      return new Promise((resolve, reject) => {
        this.db.run(
          `INSERT INTO TAREFAS (TITULO, DESCRICAO, STATUS, DATACRIACAO, ID_USUARIO) VALUES (?,?,?,?,?)`,
          Object.values(tasks),
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
  
    deleteTask(taskId) {
      return new Promise((resolve, reject) => {
        this.db.run(`delete from TAREFAS where id = ?`, taskId, (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      });
    }

    updateTask(id, titulo, descricao, status) {
      if (titulo || descricao || status) {
        let virgula = false
        let newArray = []
        let sql = 'UPDATE TAREFAS SET '
        if(titulo){
          sql = sql + ' TITULO = ?'
          virgula = true
          newArray.push(titulo)
        }
        if(descricao){
          if(virgula)
            sql = sql  +',DESCRICAO = ?'
          else{
            sql = sql  +'DESCRICAO = ?'
            virgula = true
          }
          newArray.push(descricao)
        }
        if(status){
          if(virgula)
            sql = sql  +',STATUS = ?'
          else{
            sql = sql  +'STATUS = ?'
            virgula = true
          }
          newArray.push(status)
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
      throw new Error('Nenhum atributo (id, titulo, descricao, status, datacriacao) enviado')
    }
  }
  
  module.exports = TaskDAO;
  