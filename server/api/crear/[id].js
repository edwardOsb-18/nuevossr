import schemaI from "../../models/nombres.js"
export default defineEventHandler(async (event) => {



const param= getRouterParams(event,"id")
console.log(param)
const{nombre,apellido}=await readBody(event)
console.log(nombre)
console.log(apellido)
const rr=await schemaI.updateOne({_id:param.id},{$set:{nombre,apellido}})




    return {rr}

}
)