const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");
// const users = require("../L11 Project01/MOCK_DATA.json");

const app = express();
const port = 8000;

//connection
mongoose
  .connect(
    "mongodb+srv://tejasshinde935:cpbBQopoK3NTM2ui@castor.fpllo.mongodb.net/?retryWrites=true&w=majority&appName=castor"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB Error", err));

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    jobTitle: {
      type: String,
    },
    gender: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema);

//middleware - plugin (without this express not understand what type of data is getting from postman)
app.use(express.urlencoded({ extended: false }));

//middleware for logging in output.txt file
app.use((req, res, next) => {
  console.log("Hello from Middleware 1");
  // return res.json({ msg: "Hello from middleware 1"})

  fs.appendFile(
    "output.txt",
    `\n${Date.now()}  :  ${req.ip}  :  ${req.method}  :  ${req.path}`,
    (err, data) => {
      next();
    }
  );

  // req.myUserName = "tejasshinde.dev";
  // next();
});

//Routes
app.get("/users", async (req, res) => {
  const allDbUsers = await User.find({});
  //throwing users
  const html = `
    <ul>
    ${allDbUsers
      .map((user) => `<li>${user.firstName} - ${user.email} </li>`)
      .join("")}
    </ul>
    `;

  res.send(html);
});

//REST API
app.get("/api/users", async (req, res) => {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
});

app.get("/api/users/:id", async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) return res.status(404).json({ error: "user not found" });
  return res.json(user);
});

app.post("/api/users", async (req, res) => {
  //TODO: create new user
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ msg: "All Fields are required" });
  }

  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
  });

  // console.log("result : ", result);

  return res.status(201).json({ msg: "User Created Successfully" });

  //   users.push({ ...body, id: users.length + 1 });
  //   fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
  //     return res.status(201).json({ status: "success", id: users.length });
  //   });
});




app.patch("/api/users/:id", async (req, res) => {
  //TODO: edit the user with id
  await User.findByIdAndUpdate(req.params.id, {
    lastName: "changed",
  });
  return res.json({ status: "Success" });
});

app.delete("/api/users/:id", async (req, res) => {
  //TODO: Delete the user with id

  await User.findByIdAndDelete(req.params.id);

  return res.json({ status: "Success" });
});

app.listen(port, () => console.log(`Server Started at port ${port}`));
