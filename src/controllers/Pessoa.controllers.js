import { openDb } from "../configDB.js";

const getPessoaInfo = {
    pessoa:(req, res)=>{
        const { nome, idade } = req.body
        insertPessoa(nome, idade)
        res.json(`${nome} Cadastrado com sucesso`)
        console.log(`${nome} Cadastrado com sucesso`)
    }
}

async function createTable(){
    openDb()
        .then(db=>{
            db.exec('CREATE TABLE IF NOT EXISTS Pessoa ( id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, idade INTEGER )')
        });
}

async function insertPessoa(nome, idade){
    openDb()
        .then(db=>{
            db.run('INSERT INTO Pessoa (nome, idade) VALUES (?,?)', [nome, idade]);
        });
}

export { createTable, getPessoaInfo, insertPessoa }