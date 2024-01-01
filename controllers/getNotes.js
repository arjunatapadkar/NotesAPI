
// import model
const Note = require("../models/Notes")

exports.getAll = async(req, res) =>{

    try{
        // fetch all todo items from the database
        const notes = await Note.find({});

        // response
        res.status(200).json({
            success : true,
            data : notes,
            message : "entire data fetched"
        });
    }
    catch(err){

        console.error(err);
        res.status(500).json({
            success : false,
            error : err.message,
            message : "internal server error"
        });
    }


};


exports.getById = async (req, res) => {

    try{

        // extract todo item on the basis of id
        const id = req.params.id;
        const note = await Note.findById({_id:id});

        // data for given id is not found
        if(!note){
            return res.status(404).json({
                success : false,
                message: "No data found with given id"
            })
        }

        // data found
        res.status(200).json({
            success: true,
            data: note,
            message: `Note ${id} data successfully fetched`
        })

    }
    catch (err) {

        console.error(err);
        res.status(500).json({
            success : false,
            error : err.message,
            message : "internal server error"
        });

    }

};
