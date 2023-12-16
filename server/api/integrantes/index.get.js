
import schemaI from "../../models/nombres.js"
export default defineEventHandler(async (event) => {



    const peti=await schemaI.find()
 
    console.log(peti)
    return {peti}

}
)