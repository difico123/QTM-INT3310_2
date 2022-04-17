const express = require("express");
const router = express.Router();
const { CourseApi } = require("../../controllers");
const { Auth, InstructorAuth } = require("../../middlewares/auth");
const { CourseValidation } = require("../../middlewares/validate");

const upload = require("../../utils/multer.js");

router.get("/getAll", CourseApi.getAll);
router.get("/getDetail/:id", CourseApi.getDetails);
router.post(
  "/create/:categoryId",
  upload.single("courseImageUrl"),
  Auth,
  InstructorAuth,
  CourseValidation,
  CourseApi.create
);
router.put("/active/:courseId", CourseApi.active);
router.put("/suspend/:courseId", CourseApi.suspend);

module.exports = router;
