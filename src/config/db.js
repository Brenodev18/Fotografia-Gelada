import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

const connection=mysql.createConnection({
    host: process.env.dbhost,
    user: process.env.dbuser,
    password: process.env.dbpassword,
    database: process.env.dbname
})

connection.connect((err)=>{
    if(err){
        console.error('erro ao connectar ao banco', err)
    }
    console.log(' conectado ao banco de dados ')
})

export default connection