const express = require("express")
const users = require('./MOCK_DATA.json')

const app = express();
const port = 8000;

app.get("/users",(req,res)=>{
    //throwing users
    const html = `
    <ul>
    ${users.map((user)=>`<li>${user.first_name}</li>`).join("")}
    </ul>
    `;

    res.send(html);
})



//REST API
app.get("/api/users",(req,res)=>{
    return res.json(users);
})

app.get("/api/users/:id",(req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=> user.id === id);
    return res.json(user);
})


app.post("/api/users",(req,res)=>{
    //TODO: create new user
    return res.json({ status: "pending" });
});


app.patch("/api/users/:id",(req,res)=>{
    //TODO: edit the user with id
    return res.json({ status: "pending" });
});

app.delete("/api/users/:id",(req,res)=>{
    //TODO: Delete the user with id
    return res.json({ status: "pending" });
});


// grouping of routes for same route /api/users/:id
app
    .route("/api/users/:id")
    .get(
        (req,res)=>{
            const id = Number(req.params.id);
            const user = users.find((user)=> user.id === id);
            return res.json(user);
        }
    )
   .patch((req,res)=>{
        //TODO: edit the user with id
        return res.json({ status: "pending" });
    })
    .delete((req,res)=>{
        //TODO: Delete the user with id
        return res.json({ status: "pending" });
    })

app.listen(port,()=>console.log(`Server Started at port ${port}`));
