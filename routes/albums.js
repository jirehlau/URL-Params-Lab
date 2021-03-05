var express = require('express');
const app = require('../server');
var router = express.Router();

let album = require('../models/albumModel')
/* GET users listing. */


router.get('/', function(req, res, next) {
  res.render('albums.ejs', {
    album: album
  })
});

router.get("/:id", function(req,res) {
  console.log(req.params.id)
  for (let a of album.albums) {
    if(req.params.id == a.id) {
      res.render('specificalbums.ejs', {a: a})
    }
  }
})


module.exports = router;




// let albums = [
//   {id: "a0", name: "Thriller", artist: "Michael Jackson"},
//   {id: "001", name: "Baby One More Time", artist: "Britney Spears"},
//   {id: "002", name: "Ladies' Night", artist: "Kool & the Gang"}
// ]