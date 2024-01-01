// import the model
const Note = require('../models/Notes');


// define route handler
exports.update = async(req, res) => {

    try{
        // extract title and desc from the request body 
        const {id} = req.params;
        const {title, content} = req.body;
        const now = Date.now();
        const note = await Note.findByIdAndUpdate(
            {_id:id},
            {title, content, updateAt:now,}
        )

        // response
        res.status(200).json({
            success : true,
            data : note,
            message : "data updated successfully"
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
}