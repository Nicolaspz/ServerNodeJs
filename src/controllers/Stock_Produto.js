
const ctrl ={};
const pool = require("../database");


ctrl.mostrarProd_Stock=async(req, res)=>{
 await pool.query("SELECT P.nome_prod, P.preco, sp.id_stock FROM tb_stock_prodto  as sp inner join tb_produto as p where sp.id_prodto=p.id_produto",(err,result)=>{
     if(err){
         res.send(err.message)
     }
     else{
         res.send(result)
     }
 })
}
ctrl.eliminarStock=async(req, res)=>{
    const id = req.params.id;
    
    await pool.query("DELETE FROM tb_stock where id_stock=?", [id], (err,result)=>{
        if(err){
            res.send(err.message)  
        }
        else {
            res.send("stock foi eliminado com sucesso")
        }
    })
} 
ctrl.enviarProd_Stock=async(req,res)=>{
    const {id_stock,id_prodto,qtd,data,id_user}=req.body
  await pool.query("INSERT INTO tb_stock_prodto(id_stock,id_prodto,qtd,data,id_user) VALUES(id_stock,id_prodto,qtd,data,id_user)",[id_stock,id_prodto,qtd,data,id_user], (err,result)=>{
      if(err){
          res.send(err.message)
      }
      else{
        res.send("Produto foi insertado")
        console.log(result.insertId)
      }
  })  
}
ctrl.enviarStock=async(req,res)=>{
    
  await pool.query("INSERT INTO tb_stock(qtd) VALUES(0)",(err,result)=>{
      if(err){
          res.send(err.message)
      }
      else{
        res.send("stock foi insertado")
        console.log(result.insertId)
      }
  }) }
  ctrl.ActualizarStock=async(req,res)=>{
    const id = req.params.id;
    const qtd = req.params.qtd ;
    const total= req.params.total;

    await pool.query("update INTO tb_stock set qtd=?, total=? where id_stock=?",[qtd,total, id],(err,result)=>{
        if(err){
            res.send(err.message)
        }
        else{
          res.send("stock foi insertado")
          console.log(result.insertId)
        }
    })  
}

ctrl.atualizarStokProduto=async(req, res)=>{
  const  {id_stock}=req.body;
  const id=req.params.id;

    await pool.query("UPDATE tb_stock_prodto SET qtd=? WHERE id_stock=?",[id_stock,id],(err,result)=>{
        if(err){
            res.send(err.message)  
        }
        else {
            res.send("Produto foi Actualizado com sucesso")
        }
    })
}

ctrl.pesquisarProd_Stock=async(req, res)=>{
    const id=req.params.id;
    await pool.query("SELECT P.nome_prod, P.preco, sp.id_stock FROM tb_stock_prodto  as sp inner join tb_produto as p where sp.id_prodto=p.id_produto and sp.id_stock=?", [id],(err,result)=>{
        if(err){
            res.send(err.message)
        }
        else{
            res.send(result)
        }
    })
   }
  

module.exports=ctrl