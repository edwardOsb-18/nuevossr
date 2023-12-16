import { Schema,model } from "mongoose";

const schemaI=new Schema({
nombre:String,
apellido:String

})

export default model("nombre",schemaI)