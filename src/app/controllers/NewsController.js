class NewsController {
  index(req, res) {
    res.render("news");
  }
  //GET /news/:slug
  show(req, res) {
    res.send("NEW-DETAIL");
  }
  show2(req, res) {
    res.send("Vào trong lần 2");
  }
}

module.exports = new NewsController();
