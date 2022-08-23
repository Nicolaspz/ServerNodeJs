const mysql2=require("mysql2");
const datbase=require("./keys");
const {promisify} =require("util")


const pool = mysql2.createPool(datbase);
pool.getConnection((err,connection)=>{
    if(err){
        if(err.code=="PROTOCOL_CONNECTION_LOST"){
            console.error("Conexão foi bloqueada");
        }
        if(err.code=="ER_CON_COUNT_ERROR"){
            console.error("Muitas conexão na bas dados");
        }
        if(err.code=="ECONNREFUSED"){
            console.error("A conexão foi recusada");
        }
    }
    if(connection){
        connection.release()
        console.log("base de dados conectada")
    } 
   


})

pool.query=promisify(pool.query) 

module.exports=pool;