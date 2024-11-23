const express = require("express");
const {
  getTask,
  setTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");
const router = express.Router();

// router.get("/",(req,res)=>{
//     res.status(200).json({
//         msg:"Server is running fine on get"
//     })

// })

router.get("/", getTask);

router.post("/", setTask);

router.put("/:id", updateTask);

router.delete("/:id", deleteTask);

module.exports = router;
