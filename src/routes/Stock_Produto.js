const express = require("express")
const routes = express.Router()
const {ActualizarStock,atualizarStokProduto,eliminarStock,enviarProd_Stock,enviarStock,mostrarProd_Stock,pesquisarProd_Stock}=require("../controllers/Stock_Produto")

routes.get("/",mostrarProd_Stock)
routes.delete("/eliminar/:id",eliminarStock)
routes.post("/insStok_Prod",enviarProd_Stock) //res responde ao cliente e o req traz ou requisita
routes.post("/insStok",enviarStock) 
routes.put("/atuastok/:id",ActualizarStock) 
routes.put("/atuastokProd/:id",atualizarStokProduto) 
routes.get("/pesquisar/:id",pesquisarProd_Stock) 


module.exports=routes