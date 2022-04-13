require('dotenv').config();
const express = require("express");
const formidable = require("express-formidable");
const bodyParser = require("body-parser");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT;
const logger = require("./middleware/middleware");
const userController = require("./controller/userController");
const addressesController = require("./controller/addressesController");
const aboutController = require("./controller/aboutController");
const cartController = require("./controller/cartController");
const categoryController = require("./controller/categoryController");
const coinsController = require("./controller/coinsController");
const orderController = require("./controller/orderController");
const orderPromoController = require("./controller/orderPromoController");
const paymentMethodController = require("./controller/paymentMethodsController");
const products_price = require("./controller/productsPriceController");
const promosController = require("./controller/promoController");
const shippingController = require("./controller/shippingCargoController");
const productImageController = require("./controller/productImgController");
const productController = require("./controller/productsController");
const faqController = require("./controller/faqController");
const resellerController = require("./controller/resellerController");
const favoriteController = require("./controller/favoriteController");
const customerController = require("./controller/customerController");
const hasVoucherController = require("./controller/hasVoucherController");
const voucherController = require("./controller/voucherController");
const depositeController = require("./controller/depositeController");

app.use(logger);
// app.use(formidable());
app.use(express.json());
app.use(cors());
app.listen(PORT);
app.get("/", (req, res) => {
    res.send("Hello World");
});

//get the static files from public folder
app.use("/static/img", express.static(__dirname + "/public/images"));

//user routes
app.get("/user", userController.all);
app.get("/user/:id", userController.findById);
app.post("/user", userController.create);
app.post("/user/login", userController.login);
app.post("/user/auth", userController.auth);
app.put("/user/:id", userController.update);
app.delete("/user/:id", userController.delete);

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
app.post("/order", express.json(), orderController.create);
app.put("/order/:id", orderController.update);
app.delete("/order/:id", orderController.delete);

//promos controller
app.get("/orderPromo", orderPromoController.all);
app.get("/orderPromo/:id", orderPromoController.findById);
app.post("/orderPromo", orderPromoController.create);
app.put("/orderPromo/:id", orderPromoController.update);
app.delete("/orderPromo/:id", orderPromoController.delete);

//payment method controller
app.get("/payment-method", paymentMethodController.all);
app.get("/payment-method/:id", paymentMethodController.findById);
app.post("/payment-method", paymentMethodController.create);
app.put("/payment-method/:id", paymentMethodController.update);
app.delete("/payment-method/:id", paymentMethodController.delete);

//products_price controller
app.get("/productsPrice", products_price.all);
app.get("/productsPrice/:id", products_price.findById);
app.post("/productsPrice", products_price.create);
app.put("/productsPrice/:id", products_price.update);
app.delete("/productsPrice/:id", products_price.delete);

//promos controller
app.get("/promos", promosController.all);
app.get("/promos/:id", promosController.findById);
app.post("/promos", promosController.create);
app.put("/promos/:id", promosController.update);
app.delete("/promos/:id", promosController.delete);

//shippingCargo controller
app.get("/shippingCargo", shippingController.all);
app.get("/shippingCargo/:id", shippingController.findById);
app.post("/shippingCargo", shippingController.create);
app.put("/shippingCargo/:id", shippingController.update);
app.delete("/shippingCargo/:id", shippingController.delete);

//product controller
app.get("/product", productController.all);
app.get("/product/:id", productController.findById);
app.post("/product", productController.create);
app.put("/product/:id", productController.update);
app.delete("/product/:id", productController.delete);

//faq controller
app.get("/faq", faqController.all);
app.get("/faq/:id", faqController.findById);
app.post("/faq", faqController.create);
app.put("/faq/:id", faqController.update);
app.delete("/faq/:id", faqController.delete);

//productImage controller
app.get("/productImage", productImageController.all);
app.get("/productImage/:id", productImageController.findById);
app.post("/productImage", productImageController.create);
app.put("/productImage/:id", productImageController.update);
app.delete("/productImage/:id", productImageController.delete);

//reseller controller
app.get("/reseller", resellerController.all);
app.get("/reseller/:id", resellerController.findById);
app.post("/reseller", resellerController.create);
app.put("/reseller/:id", resellerController.update);
app.delete("/reseller/:id", resellerController.delete);

//favorite controller
app.get("/favorite", favoriteController.all);
app.get("/favorite/:id", favoriteController.findById);
app.post("/favorite", favoriteController.create);
app.put("/favorite/:id", favoriteController.update);
app.delete("/favorite/:id", favoriteController.delete);

//customer controller
app.get("/customer", customerController.all);
app.get("/customer/:id", customerController.findById);
app.post("/customer", customerController.create);
app.put("/customer/:id", customerController.update);
app.delete("/customer/:id", customerController.delete);

//hasVoucher Controller
app.get("/hasVoucher", hasVoucherController.all);
app.get("/hasVoucher/:id", hasVoucherController.findById);
app.post("/hasVoucher", hasVoucherController.create);
app.put("/hasVoucher/:id", hasVoucherController.update);
app.delete("/hasVoucher/:id", hasVoucherController.delete);

//voucher Controller
app.get("/voucher", voucherController.all);
app.get("/voucher/:id", voucherController.findById);
app.post("/voucher", voucherController.create);
app.put("/voucher/:id", voucherController.update);
app.delete("/voucher/:id", voucherController.delete);

//deposite Controller
app.get("/deposite", depositeController.all);
app.get("/deposite/:id", depositeController.findById);
app.post("/deposite", depositeController.create);
app.put("/deposite/:id", depositeController.update);
app.delete("/deposite/:id", depositeController.delete);

console.log(`Server is running on http://localhost:${PORT}`);