
const Note = require("../models/Notes")

exports.deleteNote = async(req, res) => {

    try{
        // delete the particular document with the help of id 
        const {id} = req.params;
        await Note.findByIdAndDelete(id)

        // response
        res.status(200).json({
            success : true,
            
            message : "data deleted successfully"
        });
        


    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success : false,
            data : "internal server error",
            message : err.message,
        })
    }
};