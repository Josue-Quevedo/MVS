import {Schema, model} from "mongoose"

//Esquema
const esquema = new Schema({
    name:{
        type: String
    }
})

//Modelo
export const modelo = new model("usuarios", esquema)
