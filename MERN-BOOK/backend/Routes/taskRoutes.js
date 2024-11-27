const express = require("express");
const {
  getTask,
  setTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");
const router = express.Router();
const { protect } = require('../middleware/authMiddleware')
// router.get("/",(req,res)=>{
//     res.status(200).json({
//         msg:"Server is running fine on get"
//     })

// })

router.get("/", protect , getTask);

router.post("/",protect, setTask);

router.put("/:id",protect, updateTask);

router.delete("/:id",protect, deleteTask);

module.exports = router;
