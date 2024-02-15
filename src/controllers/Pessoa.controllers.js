import { openDb } from "../configDB.js";

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

async function verPessoas(){
    return openDb()
        .then(db=>{
            return db.all(`SELECT * FROM Pessoa`).then(res=>res); 
        });
};

async function verPessoa(nome){
    return openDb()
        .then(db=>{
            return db.all('SELECT * FROM Pessoa WHERE nome LIKE ?', [nome]);
        });
}

async function atualizaPessoa(nome, idade){
    openDb()
        .then(db=>{
            db.run('UPDATE Pessoa SET idade = ? WHERE nome LIKE ?', [idade, nome]);
        });
}

async function deletarPessoa(id){
    openDb()
        .then(db=>{
            db.run('DELETE FROM Pessoa WHERE id = ?', [id])
        })
}

const Pessoa = {
    home:(req, res)=>{
        res.send("Bem vindo!, utilize uma das rotas descritas na documentação")
    },
    getPessoas:async(req, res)=>{
        const pessoas = await verPessoas()
        console.log(pessoas)
        res.json(pessoas)
    },
    getPessoa:async (req, res)=>{
        const { nome } = req.body
        const pessoa = await verPessoa(nome)
        res.json({Pessoa})
    },
    cadPessoa:(req, res)=>{
        const { nome, idade } = req.body
        insertPessoa(nome, idade)
        res.status(201)
        res.json(`${nome} Cadastrado com sucesso`)
        console.log(`${nome} Cadastrado com sucesso`)
    },
    atuPessoa:(req, res)=>{
        const { nome, idade } = req.body
        atualizaPessoa(nome, idade)
        res.json(`Idade de ${nome} atualizada com sucesso para ${idade} anos!`)
        console.log(`Idade de ${nome} atualizada com sucesso para ${idade} anos!`)
    },
    delPessoa:(req, res)=>{
        const { id } = req.params
        const { nome } = req.body
        deletarPessoa(id)
        res.json(`${nome} Deletado com sucesso!`)
        console.log(`${nome} Deletado com sucesso!`)
    },
}

export { createTable, Pessoa, insertPessoa, verPessoas, verPessoa, atualizaPessoa, deletarPessoa }
