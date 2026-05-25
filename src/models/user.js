import db from "../config/db.js"

const user = {
    create:(data, callback) =>{
        const query = "INSERT INTO usuarios (nome, nick_name, email, telefone, senha) VALUES (?,?,?,?,?)"
        const values = [data.nome, data.nick_name, data.email, data.telefone, data.senha]
        db.query(query, values, (err, result) =>{
            if(err) return callback(err)
            callback(null, result)
        })
        
    }
}

export default user