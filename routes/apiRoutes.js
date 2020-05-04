// TODO: importing the store
// building out routes
// and using these routes to call your store methods
 
const store = require("./../db/store");
const router = require("express").Router();

// let note = (title, text);

router.get("./store", function(req,res) {
    res.json(storeData);
})

router.get("/notes", function(req,res) {
    console.log("hello world");
    var notesPromise = store.getNotes()
    notesPromise.then((notes) => {
        console.log(notes);
        res.json(notes);

    })

});

router.post("/notes", function(req,res) {
    console.log(req.body);
    var newNote = req.body;
    store.addNote(newNote)

})

// router.post("/notes", function(req,res) {
//     console.log(req.body);
    
// }

router.post('/deleteNote/:id', function (req, res) {
    console.log(req.params.id);
    const deleteNotes = note.filter(item => item.id != req.params.id);
    note = deleteNotes;
    return res.redirect('/');
  });
          

module.exports = router;