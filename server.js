const express = require("express");
const app = express();
const PORT = 3000;
const userController = require("./controller/userController");
const addressesController = require("./controller/addressesController");

app.use(express.json());
app.listen(PORT);

app.get("/", (req, res) => {
    res.send("Hello World");
});
//user routes
app.get("/user", userController.all); // show Alldata user
app.get("/user/:id", userController.findById); // show data user :id
app.post("/user", userController.create); // create data user
app.put("/user/:id", userController.update); //update data user :id
app.delete("/user/:id", userController.delete); //delete data user :id

app.get("/addresses/:id", addressesController.all);

console.log(`Server is running on http://localhost:${PORT}`);