const asyncHandler = require("express-async-handler");
const Task = require("../models/taskModel");

const getTask = asyncHandler(async (req, res) => {
  const tasks = await Task.find({user:req.user.id});
  res.status(200).json(tasks);
});

const setTask = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    // res.status(400).json({
    //     msg:"Please enter a task"
    // })

    //built in error handler
    throw new Error("Please enter a task");
  }
  const task = await Task.create({ text: req.body.text,user:req.user.id });
  res.status(200).json(task);
});

const updateTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(400);
    throw new Error("Task not found");
  }

  const user = await User.findById({user:req.user.id});

  if(!user){
    res.status(401)
    throw new Error('No such user found');
  }

  if(task.user.toString() !== user.id){
    res.status(401)
    throw new Error(`User is not authorized to update`)
  }
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body,{new:true})
  res.status(200).json('updatedTask');
});

const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(400);
    throw new Error("Task not found");
  }

  await Task.findByIdAndDelete(req.params.id)
  res.status(200).json({id:req.params.id});
});
module.exports = { getTask, setTask, updateTask, deleteTask };
