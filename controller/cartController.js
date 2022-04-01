const { cart } = require("../models");

exports.all = (req, res) => {
    cart.findAll().then((data) => {
        res.send(data);
    });
};

exports.findById = (req, res) => {
    let id = req.params.id;
    cart.findByPk(id).then((data) => {
        if (data) {
            res.send(data);
        } else {
            res.status(400).json({ msg: `No Cart with the id of ${req.params.id}` });
        }
    });
};

exports.create = (req, res) => {
    const newCart = {
        products_id: req.fields.products_id,
        customer_id: req.fields.customer_id,
        reseller_id: req.fields.reseller_id,
    };
    if (!newCart.products_id || !newCart.customer_id || !newCart.reseller_id) {
        res.status(400).send({ msg: "Please fill all the fields" });
    }
    cart.create(newCart).then((data) => {
        res.send(data);
    });
};

exports.update = (req, res) => {
    let id = req.params.id;
    cart.findByPk(id).then((data) => {
        if (data) {
            data
                .update({
                    products_id: req.fields.products_id,
                    customer_id: req.fields.customer_id,
                    reseller_id: req.fields.reseller_id,
                })
                .then((data) => {
                    res.send(data);
                });
        } else {
            res.status(404).json({ msg: "Cart not found" });
        }
    });
};

exports.delete = (req, res) => {
    let id = req.params.id;
    cart.findByPk(id).then((data) => {
        if (data) {
            cart
                .destroy({
                    where: {
                        id: id,
                    },
                })
                .then(() => {
                    res.status(200).json({
                        msg: ` Cart  with the id of ${req.params.id} has been deleted `,
                    });
                });
        } else {
            res
                .status(404)
                .json({ msg: `No Cart found with the id of  ${req.params.id}` });
        }
    });
};