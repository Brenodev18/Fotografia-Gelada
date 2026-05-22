import express from 'express'
const router = express.Router()
import * as fgcontroller from "../controller/fgcontroller.js"

//Rotas para renderizar as paginas
router.get("/index", (req, res)=> res.render("index"))

export default router