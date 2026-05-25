import express from 'express'
const router = express.Router()
import * as fgcontroller from "../controller/fgcontroller.js"

//Rotas para renderizar as paginas
router.get("/index", (req, res)=> res.render("index"))
router.get("/usuarios", (req, res) => res.render("usuarios"))

//Rota para cadastrar usuario
router.post("/index", fgcontroller.usuarios)

export default router