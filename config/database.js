

const mongoose = require('mongoose');

require('dotenv').config();

const DBconnect = () => {

    mongoose.connect(process.env.MONGODB_URL, {
        useUnifiedTopology : true,
        useNewUrlParser : true,
    })
    .then(() => {
        console.log("DB connected successfully");
    })
    .catch((err)=>{
        console.log("DB connection Issue");
        console.log(err);
        process.exit(1);
    });
}

module.exports  = DBconnect;