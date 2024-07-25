import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {test} from "./BACKEND/controlers/user.controler.js"

//Leer librerias de dotenv
dotenv.config();

mongoose.connect(process.env.url_DB)

//Funcion promesa
.then(()=>{
    console.log("Si jala")
})
.catch((err)=>{
    console.log("No jala", error)
})

//Sevidor local
const app = express();
app.use(cors());

//funcion para escuchar servidor
app.listen(4000, ()=>{
    console.log("Funciona el servidor local")
})

test()