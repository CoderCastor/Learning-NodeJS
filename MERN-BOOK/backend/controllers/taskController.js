const getTask = (req, res) => {
  res.status(200).json({
    msg: "Get All Tasks",
  });
};

const setTask = (req, res) => {
  if(!req.body.text){
    // res.status(400).json({
    //     msg:"Please enter a task"
    // })

    //built in error handler
    throw new Error('Please enter a task')
  }
  res.status(200).json({
    msg: "Create Task",
  });
};

const updateTask = (req, res) => {
  const id = req.params.id;
  res.status(200).json({
    msg: `Task updated with ${id} ID`,
  });
};

const deleteTask = (req, res) => {
  const id = req.params.id;
  res.status(200).json({
    msg: `Task deleted of ${id} ID`,
  });
};
module.exports = { getTask, setTask, updateTask, deleteTask };
