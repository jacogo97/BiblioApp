const express=require("express");
const app =express();

app.use(express.json());

//Importar rutas
const productos=require("./routes/productos")

app.use('/inicio', productos)

module.exports=app