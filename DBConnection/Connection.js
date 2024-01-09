const mongoose = require('mongoose')

const DBConnection = async () =>{
    try{
        const connect=await mongoose.connect("mongodb://localhost:27017/saii")
        console.log("DB connected");
        console.log(`Host: ${connect.connection.host} DB: ${connect.connection.name}`);
    }catch(err){
        console.log(`message: ${err.message}`);
    }
}
module.exports = DBConnection