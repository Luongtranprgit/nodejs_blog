const Course = require("../models/course");
const { mongooseToObject } = require("../../util/mongoose");

class CourseController {
  //GET /
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", { course: mongooseToObject(course) });
      })
      .catch(next);
  }

  // [GET] /courses/create
  create(req, res, next) {
    res.render("courses/create");
  }
  //POST/ccourse/post
  store(req, res, next) {
    console.log("Có vào post nha");
  }
}

module.exports = new CourseController();
