//nosso servidor 

const express=require('express'); //temos q saber q o xpress é uma framerwork, uma aplicação, usaremos oq ele oferce
const users=require('./routes/users')
const Eleitores =require("./routes/Eleitor");
const Prod_stock =require("./routes/Stock_Produto");
const produto =require("./routes/produto");

const morgan=require("morgan");
const bodyParser = require('body-parser');
const cors=require("cors")
const multer=require("multer")
const fileUpload=require("express-fileupload")

const app=express();//vamos fazer o uso desta aplicação express

//configurações

app.set("port",process.env.PORT||3001);// tratamento da porta para o start
//midles
app.use(morgan("dev"))// para ter as info do server pode se usar (combined)
app.use(express.json())// hablitamos  o server para receber ficheiro do formato json
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors()); //permite dar acesso ao da Api, a area da proteção do app
app.use(fileUpload())

//Bd
require("./database")

//minhas rotas
app.use("/user", users)
app.use("/eleitores",Eleitores)
app.use("/produtos",produto)
app.use("/prodStock",Prod_stock)





//levantando o servidor
app.listen(app.get("port"),()=>{
    console.log("servidor na porta  " + app.get("port"));
})