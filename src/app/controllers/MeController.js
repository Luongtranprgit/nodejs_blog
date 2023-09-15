const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../util/mongoose");

class MeController {
  //GET /
  storedCourses(req, res, next) {
    Course.find({})
      .then((courses1) =>
        res.render("me/stored-courses", {
          courses1: multipleMongooseToObject(courses1),
        })
      )
      .catch(next);
  }
}

module.exports = new MeController();
