const mongoose = require('mongoose');


const orderItems = new  mongoose.Schema({
    Items:{
        type:String,
        require:true
    },
    GrandTotal:{
        type:Number,
        require:true
    },
    DateTime:{
        type:Date,
        default:Date.now
    },

});

// Registering models with the mongodb

module.exports = mongoose.model('Orders',orderItems );