
const express = require('express')
const router = express.Router()


// fetching controllers
const {create} = require("../controllers/createNote")
const {getAll, getById} = require("../controllers/getNotes") 
const {update} = require("../controllers/updateNote")
const {deleteNote} = require("../controllers/deleteNote")

// mapping the routes
router.post("/createnote", create);
router.get("/notes", getAll);
router.get("/notes/:id", getById);
router.put("/update/:id", update);
router.delete("/delete/:id", deleteNote);


// export
module.exports = router;