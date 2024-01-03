
// import model
const Note = require("../models/Notes");

// create controller
exports.create = async(req, res) => {

    try{
        // extract title and content from req body
        const {title, content} = req.body;
        const titleMaxLength = 100; 
        const contentMaxLength = 1000; 
        const titleMinLength = 5;
        const contentMinLength = 10;

        // validation
        if (!title || !content ) {
            console.log("not all fields...");
            return res.status(400).json({
              status: 400,
              message: "Please fill all fields",
            });
        }

        if (title.length > titleMaxLength || title.length < titleMinLength || content.length > contentMaxLength || content.length < contentMinLength ) {
            console.log("Please ensure the length of title and content is correct");
            return res.status(400).json({
              status: 400,
              message: "Please ensure the length of title and content is correct",
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