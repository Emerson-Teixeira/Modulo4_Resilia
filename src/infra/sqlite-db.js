
const path = require('path');
const caminhoArq = path.resolve(__dirname,'../','../','database.db')

const sqlite3 = require('sqlite3').verbose();
const bd = new sqlite3.Database(caminhoArq);

//Processamento de sinal
process.on('SIGINT', () =>
    bd.close(() => {
        console.log('BD encerrado!');
        process.exit(0);
    })
);

module.exports = bd;