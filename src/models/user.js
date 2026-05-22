import db from "../config/db.js"

const user = {
    create:(data, callback) =>{
        const query = "insert int usuarios. (nome, nick_name, email, telefone, senha) values (?,?,?,?,?)"
        db.execulte(query,[data.nome, data.nick_name, data.email, data.telefone, data.senha], callback)
    }
}

export default user