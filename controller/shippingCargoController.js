const { shipping_cargo } = require("../models");

exports.all = (req, res) => {
    shipping_cargo.findAll().then((data) => {
        res.send(data);
    });
};

exports.findById = (req, res) => {
    let id = req.params.id;
    shipping_cargo.findByPk(id).then((data) => {
        if (data) {
            res.send(data);
        } else {
            res.status(400).json({ msg: `No C with the id of ${req.params.id}` });
        }
    });
};

exports.create = (req, res) => {
    const newShippingCargo = {
        id: shipping_cargo.length,
        nama_kurir: req.body.nama_kurir,
        rate_price: req.body.rate_price,
        estimasi_pengiriman: req.body.estimasi_pengiriman,
    };
    if (!newShippingCargo.nama_kurir ||
        !newShippingCargo.rate_price ||
        !newShippingCargo.estimasi_pengiriman
    ) {
        res.status(400).send({ msg: "Please fill all the fields" });
    }
    shipping_cargo.create(newShippingCargo).then((data) => {
        res.send(data);
    });
};

exports.update = (req, res) => {
    let id = req.params.id;
    shipping_cargo.findByPk(id).then((data) => {
        if (data) {
            data
                .update({
                    nama_kurir: req.body.nama_kurir,
                    rate_price: req.body.rate_price,
                    estimasi_pengiriman: req.body.estimasi_pengiriman,
                })
                .then((data) => {
                    res.send(data);
                });
        } else {
            res.status(404).json({ msg: "Shipping Cargo not found" });
        }
    });
};

exports.delete = (req, res) => {
    let id = req.params.id;
    shipping_cargo.findByPk(id).then((data) => {
        if (data) {
            shipping_cargo
                .destroy({
                    where: {
                        id: id,
                    },
                })
                .then(() => {
                    res.status(200).json({
                        msg: ` Shipping Cargo  with the id of ${req.params.id} has been deleted `,
                    });
                });
        } else {
            res
                .status(404)
                .json({
                    msg: `No Shipping Cargo found with the id of  ${req.params.id}`,
                });
        }
    });
};