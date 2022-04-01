const { deposite } = require("../models");

exports.all = (req, res) => {
    deposite.findAll().then((data) => {
        res.send(data);
    });
};

exports.findById = (req, res) => {
    let id = req.params.id;
    deposite.findByPk(id).then((data) => {
        if (data) {
            res.send(data);
        } else {
            res
                .status(400)
                .json({ msg: `No Deposite with the id of ${req.params.id}` });
        }
    });
};

exports.create = (req, res) => {
    const newDeposite = {
        reseller_id: req.fields.reseller_id,
        mount: req.fields.mount,
        payment_id: req.fields.payment_id,
        is_verified: req.fields.is_verified,
    };
    if (!newDeposite.reseller_id ||
        !newDeposite.mount ||
        !newDeposite.payment_id ||
        !newDeposite.is_verified
    ) {
        res.status(400).send({ msg: "Please fill all the fields" });
    }
    deposite.create(newDeposite).then((data) => {
        res.send(data);
    });
};

exports.update = (req, res) => {
    let id = req.params.id;
    deposite.findByPk(id).then((data) => {
        if (data) {
            data
                .update({
                    reseller_id: req.fields.reseller_id,
                    mount: req.fields.mount,
                    payment_id: req.fields.payment_id,
                    is_verified: req.fields.is_verified,
                })
                .then((data) => {
                    res.send(data);
                });
        } else {
            res.status(404).json({ msg: "Deposite not found" });
        }
    });
};

exports.delete = (req, res) => {
    let id = req.params.id;
    deposite.findByPk(id).then((data) => {
        if (data) {
            deposite
                .destroy({
                    where: {
                        id: id,
                    },
                })
                .then(() => {
                    res.status(200).json({
                        msg: ` Deposite  with the id of ${req.params.id} has been deleted `,
                    });
                });
        } else {
            res
                .status(404)
                .json({ msg: `No Deposite found with the id of  ${req.params.id}` });
        }
    });
};