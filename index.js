
const express = require('express')
const app = express();


// 
require('dotenv').config();

const PORT = process.env.PORT || 4000;

app.use(express.json());

const notesRoutes = require("./routes/notes");

// mount
app.use("/api/v1", notesRoutes);

app.listen(PORT, () =>{
    console.log("App started")
});

const DBconnect = require("./config/Database");
DBconnect();

// default route of app
app.get("/", (req, res)=>{
    res.send("<h1>Homepage</h1>")
});



