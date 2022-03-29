const express = require("express");
const app = express();
const PORT = 3000;
const userController = require("./controller/userController");
const addressesController = require("./controller/addressesController");
const aboutController = require("./controller/aboutController");
const cartController = require("./controller/cartController");
const categoryController = require("./controller/categoryController");

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

//addresses  routes
app.get("/addresses", addressesController.all);
app.get("/addresses/:id", addressesController.findById);
app.post("/addresses", addressesController.create);
app.put("/addresses/:id", addressesController.update);
app.delete("/addresses/:id", addressesController.delete);

//about routes
app.get("/about", aboutController.all);
app.get("/about/:id", aboutController.findById);
app.post("/about", aboutController.create);
app.put("/about/:id", aboutController.update);
app.delete("/about/:id", aboutController.delete);

//cart routes
app.get("/cart", cartController.all);
app.get("/cart/:id", cartController.findById);
app.post("/cart", cartController.create);
app.put("/cart/:id", cartController.update);
app.delete("/cart/:id", cartController.delete);

//category routes
app.get("/category", categoryController.all);
app.get("/category/:id", categoryController.findById);
app.post("/category", categoryController.create);
app.put("/category/:id", categoryController.update);
app.delete("/category/:id", categoryController.delete);

console.log(`Server is running on http://localhost:${PORT}`);