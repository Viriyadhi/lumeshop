const { payment_methods } = require("../models");

exports.all = (req, res) => {
    payment_methods.findAll().then((data) => {
        res.send(data);
    });
};

exports.findById = (req, res) => {
    let id = req.params.id;
    payment_methods.findByPk(id).then((data) => {
        if (data) {
            res.send(data);
        } else {
            res
                .status(400)
                .json({ msg: `No Payment Method with the id of ${req.params.id}` });
        }
    });
};

exports.create = (req, res) => {
    const newPayment_methods = {
        nama: req.fields.nama,
        nomor_rekening: req.fields.nomor_rekening,
        nama_rekening: req.fields.nama_rekening,
    };
    if (!newPayment_methods.nama ||
        !newPayment_methods.nomor_rekening ||
        !newPayment_methods.nama_rekening
    ) {
        res.status(400).send({ msg: "Please fill all the fields" });
    }
    payment_methods.create(newPayment_methods).then((data) => {
        res.send(data);
    });
};

exports.update = (req, res) => {
    let id = req.params.id;
    payment_methods.findByPk(id).then((data) => {
        if (data) {
            data
                .update({
                    nama: req.fields.nama,
                    nomor_rekening: req.fields.nomor_rekening,
                    nama_rekening: req.fields.nama_rekening,
                })
                .then((data) => {
                    res.send(data);
                });
        } else {
            res.status(404).json({ msg: "Payment Method not found" });
        }
    });
};

exports.delete = (req, res) => {
    let id = req.params.id;
    payment_methods.findByPk(id).then((data) => {
        if (data) {
            payment_methods
                .destroy({
                    where: {
                        id: id,
                    },
                })
                .then(() => {
                    res.status(200).json({
                        msg: ` Payment Method  with the id of ${req.params.id} has been deleted `,
                    });
                });
        } else {
            res.status(404).json({
                msg: `No Payment Method found with the id of  ${req.params.id}`,
            });
        }
    });
};