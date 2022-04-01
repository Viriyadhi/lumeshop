const { has_voucher } = require("../models");

exports.all = (req, res) => {
    has_voucher.findAll().then((data) => {
        res.send(data);
    });
};

exports.findById = (req, res) => {
    let id = req.params.id;
    has_voucher.findByPk(id).then((data) => {
        if (data) {
            res.send(data);
        } else {
            res
                .status(400)
                .json({ msg: `No hasVoucher with the id of ${req.params.id}` });
        }
    });
};

exports.create = (req, res) => {
    const newHasVoucher = {
        voucher_id: req.fields.voucher_id,
        customer_id: req.fields.customer_id,
        reseller_id: req.fields.reseller_id,
    };
    if (!newHasVoucher.voucher_id ||
        !newHasVoucher.customer_id ||
        !newHasVoucher.reseller_id
    ) {
        res.status(400).send({ msg: "Please fill all the fields" });
    }
    has_voucher.create(newHasVoucher).then((data) => {
        res.send(data);
    });
};

exports.update = (req, res) => {
    let id = req.params.id;
    has_voucher.findByPk(id).then((data) => {
        if (data) {
            data
                .update({
                    voucher_id: req.fields.voucher_id,
                    customer_id: req.fields.customer_id,
                    reseller_id: req.fields.reseller_id,
                })
                .then((data) => {
                    res.send(data);
                });
        } else {
            res.status(404).json({ msg: "hasVoucher not found" });
        }
    });
};

exports.delete = (req, res) => {
    let id = req.params.id;
    has_voucher.findByPk(id).then((data) => {
        if (data) {
            has_voucher
                .destroy({
                    where: {
                        id: id,
                    },
                })
                .then(() => {
                    res.status(200).json({
                        msg: ` hasVoucher  with the id of ${req.params.id} has been deleted `,
                    });
                });
        } else {
            res
                .status(404)
                .json({ msg: `No hasVoucher found with the id of  ${req.params.id}` });
        }
    });
};