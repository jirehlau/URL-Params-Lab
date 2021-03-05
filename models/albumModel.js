
let albums = [
    {id: "0", name: "Thriller", artist: "Michael Jackson"},
    {id: "01", name: "Baby One More Time", artist: "Britney Spears"},
    {id: "02", name: "Ladies' Night", artist: "Kool & the Gang"}
  ]

  function getOne(id) {
      return albums.find(album => album.id === parseInt(id));
  }

  function getAll() {
      return albums;
  }

  module.exports = {
      getOne,
      getAll,
      albums: albums,
  }