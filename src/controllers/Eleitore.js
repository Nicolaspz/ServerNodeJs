
const ctrl ={};
const pool = require("../database");


ctrl.mostrar=async(req, res)=>{
 await pool.query("SELECT * FROM tb_eleitor ",(err,result)=>{
     if(err){
         res.send(err.message)
     }
     else{
         res.send(result)
     }
 })
}
ctrl.enviar=async(req,res)=>{
    const {nome,cotacto}=req.body
  await pool.query("INSERT INTO tb_eleitor(nome,cotacto) VALUES(?,?)",[nome,cotacto], (err,result)=>{
      if(err){
          res.send(err.message)
      }
      else{
        res.send("usuario foi insertado")
        console.log(result.insertId)
      }
  })  
}
ctrl.eliminar=async(req, res)=>{
    const id = req.params.id;
    
    await pool.query("DELETE FROM tb_eleitor where id=?", [id], (err,result)=>{
        if(err){
            res.send(err.message)  
        }
        else {
            res.send("usuario foi eliminado com sucesso")
        }
    })
}
ctrl.atualizar=async(req, res)=>{
  const  {nome,contacto}=req.body;
  const id=req.params.id;

    await pool.query("UPDATE tb_eleitor SET nome=?,cotacto=? WHERE id=?",[nome,contacto,id],(err,result)=>{
        if(err){
            res.send(err.message)  
        }
        else {
            res.send("usuario foi Actualizado com sucesso")
        }
    })
}
module.exports=ctrl