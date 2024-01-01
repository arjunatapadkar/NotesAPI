
// import model
const Note = require("../models/Notes");

// create controller
exports.create = async(req, res) => {

    try{
        // extract title and content from req body
        const {title, content} = req.body;

        // validation
        if (!title || !content ) {
            console.log("not all fields...");
            return res.status(400).json({
              status: 400,
              message: "Please fill all fields",
            });
        }

        const now = Date.now();
        const note = await Note.create({
            title, content, now, now
        })

        return res.status(200).json({
            success : true,
            message : "Note created successfully"
        });

    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            success: false,
            message : "Note not created",
        });
    }

};