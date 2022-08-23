
const ctrl={}

const pool = require("../database")
const { user } = require("../keys")

ctrl.mostrar=async(req, res)=>{
 await pool.query("SELECT * FROM tb_user ",(err,result)=>{
     if(err){
         res.send(err.message)
     }
     else{
         res.send(result)
     }
 })
}
ctrl.enviar=async(req,res)=>{
    const {nome,user,pass,email,role}=req.body
  await pool.query("INSERT INTO tb_user(nome_user,password ,email,role) VALUES(?,?,?,?)",[nome,user,pass,email,role], (err,result)=>{
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
    
    await pool.query("DELETE FROM tb_user where id_user =?", [id], (err,result)=>{
        if(err){
            res.send(err.message)  
        }
        else {
            res.send("usuario foi eliminado com sucesso")
        }
    })
}
ctrl.atualizar=async(req, res)=>{
  const  {nome,user,pass,email,role}=req.body;
  const id=req.params.id;

    await pool.query("UPDATE tb_user SET nome_user=? , password=? ,email=?,role=?",[nome,user,pass,email,role],(err,result)=>{
        if(err){
            res.send(err.message)  
        }
        else {
            res.send("usuario foi Actualizado com sucesso")
        }
    })
    
}
ctrl.pesquisar=async(req, res)=>{
    const id=req.params.id;
    await pool.query("SELECT * FROM tb_user where id_user=? ", [id],(err,result)=>{
        if(err){
            res.send(err.message)
        }
        else{
            res.send(result)
        }
    })
   }
module.exports=ctrl