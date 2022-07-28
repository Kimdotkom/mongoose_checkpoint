//Require mongoose
const mongoose = require('mongoose');

//Create schema
const Schema = mongoose.Schema ;

//Create person schema
const personSchema = new Schema ({
    name : {
        type : String ,
        required : true 
    },
    age : Number ,

    favoriteFoods : {
      type :  [String]
    },
})

//export Schema
module.exports = Person = mongoose.model('person', personSchema)