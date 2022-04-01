const { voucher } = require("../models");

exports.all = (req, res) => {
    voucher.findAll().then((data) => {
        res.send(data);
    });
};

exports.findById = (req, res) => {
    let id = req.params.id;
    voucher.findByPk(id).then((data) => {
        if (data) {
            res.send(data);
        } else {
            res
                .status(400)
                .json({ msg: `No Voucher with the id of ${req.params.id}` });
        }
    });
};

exports.create = (req, res) => {
    const newVoucher = {
        code: req.fields.code,
        type: req.fields.type,
        expired_at: req.fields.expired_at,
    };
    if (!newVoucher.code || !newVoucher.type || !newVoucher.expired_at) {
        res.status(400).send({ msg: "Please fill all the fields" });
    }
    voucher.create(newVoucher).then((data) => {
        res.send(data);
    });
};

exports.update = (req, res) => {
    let id = req.params.id;
    voucher.findByPk(id).then((data) => {
        if (data) {
            data
                .update({
                    code: req.fields.code,
                    type: req.fields.type,
                    expired_at: req.fields.expired_at,
                })
                .then((data) => {
                    res.send(data);
                });
        } else {
            res.status(404).json({ msg: "Voucher not found" });
        }
    });
};

exports.delete = (req, res) => {
    let id = req.params.id;
    voucher.findByPk(id).then((data) => {
        if (data) {
            voucher
                .destroy({
                    where: {
                        id: id,
                    },
                })
                .then(() => {
                    res.status(200).json({
                        msg: ` Voucher  with the id of ${req.params.id} has been deleted `,
                    });
                });
        } else {
            res
                .status(404)
                .json({ msg: `No Voucher found with the id of  ${req.params.id}` });
        }
    });
};