
const ctrl ={};
const pool = require("../database");


ctrl.mostrar=async(req, res)=>{
 await pool.query("SELECT * FROM tb_produto ",(err,result)=>{
     if(err){
         res.send(err.message)
     }
     else{
         res.send(result)
     }
 })
}
ctrl.eliminar=async(req, res)=>{
    const id = req.params.id;
    
    await pool.query("DELETE FROM tb_produto where id_produto=?", [id], (err,result)=>{
        if(err){
            res.send(err.message)  
        }
        else {
            res.send("Produto foi eliminado com sucesso")
        }
    })
} 
ctrl.enviar=async(req,res)=>{
    const {nome_prod,descri,preco}=req.body
  await pool.query("INSERT INTO tb_produto(nome_prod,descri,preco) VALUES(?,?,?)",[nome_prod,descri,preco], (err,result)=>{
      if(err){
          res.send(err.message)
      }
      else{
        res.send("Produto foi insertado")
        console.log(result.insertId)
      }
  })  
}

ctrl.atualizar=async(req, res)=>{
  const  {nome_prod,descri,preco}=req.body;
  const id=req.params.id;

    await pool.query("UPDATE tb_produto SET nome_prod=?,descri=?,preco=? WHERE id_produto=?",[nome_prod,descri,preco,id],(err,result)=>{
        if(err){
            res.send(err.message)  
        }
        else {
            res.send("Produto foi Actualizado com sucesso")
        }
    })
}

ctrl.pesquisar=async(req, res)=>{
    const id=req.params.id;
    await pool.query("SELECT * FROM tb_produto where id_produto=? ", [id],(err,result)=>{
        if(err){
            res.send(err.message)
        }
        else{
            res.send(result)
        }
    })
   }
   ctrl.pesq=async(req, res)=>{
    const id=req.params.id;
    await pool.query("SELECT * FROM tb_produto where id_produto=? ", [id],(err,result)=>{
        if(err){
            res.send(err.message)
        }
        else{
            res.send(result)
        }
    })
   }

module.exports=ctrl