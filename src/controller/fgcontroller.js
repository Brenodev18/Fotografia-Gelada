import user from "../models/user.js"

export const usuarios = (req, res) => {
    const { nome, nick_name, email, telefone, senha } = req.body;
    user.create({nome, nick_name, email, telefone, senha}, (err) => {
        if(err) return res.status(500).send("erro ao cadastrar"+err.message)
       res.send("cadastrado com sucesso")
    })
 
}