const express = require("express");

const router = express.Router();

const {
  createTask,
  getAllTaks,   // corrected from getAllTaks
  getSingleTaks, // corrected from getSingleTaks
  updateTask,
  deleteTask
} = require("../controllers/taskCotroller");

router.post("/", createTask);
router.get("/", getAllTaks);
router.get("/:id", getSingleTaks);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);
module.exports = router;
