import schemaI from "../../models/nombres.js"
export default defineEventHandler(async (event) => {



   
 const body=await readBody(event)
const req=schemaI(body)
console.log(req)
const pet=await req.save()
console.log(pet)
    console.log({pet})
    return {pet}

}
)