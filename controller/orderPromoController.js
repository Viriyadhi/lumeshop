const { order_promo } = require("../models");

exports.all = (req, res) => {
    order_promo.findAll().then((data) => {
        res.send(data);
    });
};

exports.findById = (req, res) => {
    let id = req.params.id;
    order_promo.findByPk(id).then((data) => {
        if (data) {
            res.send(data);
        } else {
            res.status(400).json({ msg: `No Promo with the id of ${req.params.id}` });
        }
    });
};

exports.create = (req, res) => {
    const newPromo = {
        store_voucher_id: req.fields.store_voucher_id,
        product_voucher_id: req.fields.product_voucher_id,
    };
    if (!newPromo.store_voucher_id || !newPromo.product_voucher_id) {
        res.status(400).send({ msg: "Please fill all the fields" });
    } else {
        order_promo.create(newPromo).then((data) => {
            res.send(data);
        });
    }
};

exports.update = (req, res) => {
    let id = req.params.id;
    order_promo.findByPk(id).then((data) => {
        if (data) {
            data
                .update({
                    store_voucher_id: req.fields.store_voucher_id,
                    product_voucher_id: req.fields.product_voucher_id,
                })
                .then((data) => {
                    res.send(data);
                    res.status(200).json({ msg: "Data has been Updated" });
                });
        } else {
            res.status(404).json({ msg: "Promo not found" });
        }
    });
};

exports.delete = (req, res) => {
    let id = req.params.id;
    order_promo.findByPk(id).then((data) => {
        if (data) {
            data
                .destroy({
                    where: {
                        id: id,
                    },
                })
                .then(() => {
                    res.status(200).json({
                        msg: ` Promo  with the id of ${req.params.id} has been deleted `,
                    });
                });
        } else {
            res
                .status(404)
                .json({ msg: `No Promo found with the id of  ${req.params.id}` });
        }
    });
};