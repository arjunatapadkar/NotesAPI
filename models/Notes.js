const mongoose = require('mongoose');

// schema of the Notes
const Note = mongoose.Schema({
    title : {
        type : String,
        required: true
    },

    content : {
        type : String,
        required : true,

    },
    createdAt : {
        type : Date,
        default: Date.now,
        required: true,
    },
    updatedAt : {
        type : Date,
        default: Date.now,
       
    }
});


// export model
module.exports = mongoose.model("Note", Note);















