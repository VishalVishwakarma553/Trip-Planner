import mongoose from "mongoose"
export const connectdb = async () => {
    try{
        const connect = await mongoose.connect(process.env.MONGODBURI)
        console.log(`Mongodb connected ${connect.connection.host}`)
    }catch(error){
        console.log("Error in database connection ", error)
    }
}