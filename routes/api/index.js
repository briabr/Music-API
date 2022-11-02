const router = require("express").Router();
const db = require('../../db/connection')

//Artist CRUD
//post /api/artists - create new artist
//GET/api/artists/:id get me one artist
router.get("/artists", (req, res) => {
    db.query("select * from artists", (err,result) => {
        res.json(result);
    })
})
//POST/api/artist/:id - update an artist
router.post("/artists", (req, res) => {
    const { name, origin, circa } = req.body;
    // const object = {
    //     name : "Madonna",
    //     origin: "Bay City, Michigan",
    //     circa: "1979"
    // }
    db.query("insert into artists (name, origin, circa) values (?, ?, ?)",[name, origin, circa], (err,result) => {
        res.json(result);
    })
})

//PUT/api/artists/:id -update an artist
router.put("/artists", (req, res) => {
    const { name, origin, circa } = req.body;
    // const object = {
    //     name : "Madonna",
    //     origin: "Bay City, Michigan",
    //     circa: "1979"
    // }
    db.query("update artists set", [req.body, req.params] , (err,result) => {
        res.json(result);
    })
})
//Delete /api/artists/:id



module.exports = router;

