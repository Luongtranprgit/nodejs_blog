const Course = require("../models/course");
const { multipleMongooseToObject } = require("../../util/mongoose");

class SiteController {
  //GET /
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("home", {
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch((err) => {
        next;
      });
  }
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
