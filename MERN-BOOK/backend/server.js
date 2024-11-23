const express = require("express");
const taskRoutes = require("./Routes/taskRoutes");
const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT || 8000

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/api/tasks", taskRoutes);

app.use(errorHandler);

app.listen(port,()=>console.log(`Server is running on port ${port}`));
    