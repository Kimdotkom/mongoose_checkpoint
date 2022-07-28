//Require mongoose
const mongoose = require('mongoose');

//Create schema
const Schema = mongoose.Schema ;

//Create user schema
const userSchema = new Schema ({
    name : {
        type : String ,
        required : true 
    },
    age : Number ,

    email : {
      type :  String ,
      unique : true
    },
})

//export Schema
module.exports = User = mongoose.model('user', userSchema)