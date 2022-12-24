const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');


const PetSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, "The Name is required"],
        minlength: [3, "The name must be at least 3 characters"],
        unique: true
    },
    type:{
        type:String,
        required: [true, "The Type is required"],
        minlength: [3, "The Type must be at least 3 characters"]
    },
    description:{
        type:String,
        required: [true, "The Description is required"],
        minlength: [3, "The Description must be at least 3 characters"]
    },
    skill1:{
        type:String
    },
    skill2:{
        type:String
    },
    skill3:{
        type:String
    },
}, {timestamps: true })

PetSchema.plugin(uniqueValidator);


module.exports = mongoose.model('Pet', PetSchema)