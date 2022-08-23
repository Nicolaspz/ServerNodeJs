const express = require("express")
const routes = express.Router()
const {mostrar, enviar,eliminar,atualizar}=require("../controllers/Eleitore")

routes.get("/mostrar", mostrar)

routes.post("/inserir",enviar) //res responde ao cliente e o req traz ou requisita
routes.delete("/eliminar/:id",eliminar)
routes.put("/atualizar/:id",atualizar)


module.exports=routes