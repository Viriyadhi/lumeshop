const express = require("express");
const app = express();
const PORT = 3000;
const userController = require("./controller/userController");
const addressesController = require("./controller/addressesController");
const aboutController = require("./controller/aboutController");
const cartController = require("./controller/cartController");
const categoryController = require("./controller/categoryController");
const coinsController = require("./controller/coinsController");
const orderController = require("./controller/orderController");
const orderPromoController = require("./controller/order-promoController");

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

//coin controller
app.get("/coins", coinsController.all);
app.get("/coins/:id", coinsController.findById);
app.post("/coins", coinsController.create);
app.put("/coins/:id", coinsController.update);
app.delete("/coins/:id", coinsController.delete);

//order controller
app.get("/order", orderController.all);
app.get("/order/:id", orderController.findById);
app.post("/order", orderController.create);
app.put("/order/:id", orderController.update);
app.delete("/order/:id", orderController.delete);

//promos controller
app.get("/promos", orderPromoController.all);
app.get("/promos/:id", orderPromoController.findById);
app.post("/promos", orderPromoController.create);
app.put("/promos/:id", orderPromoController.update);
app.delete("/promos/:id", orderPromoController.delete);

console.log(`Server is running on http://localhost:${PORT}`);