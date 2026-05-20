import express from 'express'
import session from 'express-session'
import path from 'path'

import {fileURLToPath} from 'url'
import rotas from './src/routes/rotas.js'

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const publicpatch = path.join(__dirname, 'public')

app.use(express.static(publicpatch))

app.set("view engine", "ejs")
app.set("views", path.join(__dirname,"src","views"))

app.use(express.urlencoded({extended: true}))
app.use(express.json())

//Rotas
app.use('/', rotas)

app.listen(3000, () =>{
    console.log("servidor Rodando")
})
