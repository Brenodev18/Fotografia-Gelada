import express from 'express'
const router = express.router()
import * as fgcontroller from "../controller/fgcontroller"

//Rotas para renderizar as paginas
router.get("/index", (req, res)=> res.render("index"))

export default router