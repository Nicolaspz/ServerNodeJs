const express = require("express")
const routes = express.Router()
const {mostrar,eliminar,atualizar,enviar,pesq}=require("../controllers/produto")

routes.get("/", mostrar)
routes.delete("/eliminar/:id",eliminar)
routes.post("/inserir",enviar) //res responde ao cliente e o req traz ou requisita
routes.put("/atualizar/:id",atualizar) 
routes.get("/pesquisar/:id",pesq) 


module.exports=routes