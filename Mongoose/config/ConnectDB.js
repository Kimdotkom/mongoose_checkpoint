//Require mongoose
const mongoose = require('mongoose');

//Function connect DB
const connect = async ()=>{
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log('Connected to Database....')

    } catch (error) {
        console.log(error) 
    
    }
}

//export
module.exports = connect