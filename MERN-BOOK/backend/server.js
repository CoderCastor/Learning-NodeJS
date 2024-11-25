const express = require("express");
const taskRoutes = require("./Routes/taskRoutes");
const userRoutes = require('./Routes/userRoutes')
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./connect/database");
require("dotenv").config();

const port = process.env.PORT || 5000;
connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/tasks", taskRoutes);
app.use("/api/users",userRoutes);

app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));
