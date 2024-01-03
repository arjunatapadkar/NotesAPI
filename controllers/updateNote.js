// import the model
const Note = require('../models/Notes');


// define route handler
exports.update = async(req, res) => {

    try{
        // extract title and desc from the request body 
        const {id} = req.params;
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