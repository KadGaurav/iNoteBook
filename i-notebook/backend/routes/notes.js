const express = require('express');
const fetchuser = require('../middleware/fetchuser');
const router = express.Router();
const Note = require('../models/Note');
const { body, validationResult } = require('express-validator');

//ROUTE 1: Get all Notes using : GET "/api/auth/fetchallnotes" ------------------------------->> Login Required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Error in routes/notes ROUTE 1.js");
    }
});

//ROUTE 2: add new note using : POST "/api/auth/fetchallnotes" ------------------------------->> Login Required
router.post('/addnote', fetchuser, [
    body('title', 'Enter a Valid Title').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 })
], async (req, res) => {
    try {
        const { title, description, tag } = req.body;

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const note = new Note({
            title, description, tag, user: req.user.id
        })
        const savedNote = await note.save();

        res.json(savedNote);

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Error in routes/note ROUTE 2.js");
    }

});

//ROUTE 3: update note using : PUT "/api/auth/updatenote" ------------------------------->> Login Required
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        const newNote = {}
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };

        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") };

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed !!");
        }
        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
        res.json(note);

    }  catch (error) {
        console.log(error.message);
        res.status(500).send("Error in routes/note ROUTE 3.js");
    }
});

//ROUTE 4: update note using : PUT "/api/auth/deletenote" ------------------------------->> Login Required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    try {
        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") };
    
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed !!");
        }
        note = await Note.findByIdAndDelete(req.params.id);
        res.json({ "Success": "Note has been deleted ", note: note });
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Error in routes/note ROUTE 4.js");
    }
    
});

module.exports = router;