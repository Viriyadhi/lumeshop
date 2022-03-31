const { promo } = require("../models");

exports.all = (req, res) => {
    promo.findAll().then((data) => {
        res.send(data);
    });
};

exports.findById = (req, res) => {
    let id = req.params.id;
    promo.findByPk(id).then((data) => {
        if (data) {
            res.send(data);
        } else {
            res
                .status(400)
                .json({ msg: `No Promos with the id of ${req.params.id}` });
        }
    });
};

exports.create = (req, res) => {
    const newPromos = {
        products_id: req.fields.products_id,
        value_promo: req.fields.value_promo,
    };
    if (!newPromos.products_id || !newPromos.value_promo) {
        res.status(400).send({ msg: "Please fill all the fields" });
    }
    promo.create(newPromos).then((data) => {
        res.send(data);
    });
};

exports.update = (req, res) => {
    let id = req.params.id;
    promo.findByPk(id).then((data) => {
        if (data) {
            data
                .update({
                    products_id: req.fields.products_id,
                    value_promo: req.fields.value_promo,
                })
                .then((data) => {
                    res.send(data);
                });
        } else {
            res.status(404).json({ msg: "Promos not found" });
        }
    });
};

exports.delete = (req, res) => {
    let id = req.params.id;
    promo.findByPk(id).then((data) => {
        if (data) {
            promo
                .destroy({
                    where: {
                        id: id,
                    },
                })
                .then(() => {
                    res.status(200).json({
                        msg: ` Promos  with the id of ${req.params.id} has been deleted `,
                    });
                });
        } else {
            res
                .status(404)
                .json({ msg: `No Promos found with the id of  ${req.params.id}` });
        }
    });
};