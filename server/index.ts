import { Nitro } from "nitropack"
import mongoose from "mongoose"

export default async(_nitroApp:Nitro)=>{


    mongoose.connect("mongodb+srv://edward:66WrtMIabLbPHyi1@cluster0.t88lpcd.mongodb.net/?retryWrites=true&w=majority",{dbName:"osb"})
    console.log("first")

}