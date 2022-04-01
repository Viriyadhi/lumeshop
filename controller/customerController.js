const { customer } = require("../models");

exports.all = (req, res) => {
    customer.findAll().then((data) => {
        res.send(data);
    });
};

exports.findById = (req, res) => {
    let id = req.params.id;
    customer.findByPk(id).then((data) => {
        if (data) {
            res.send(data);
        } else {
            res
                .status(400)
                .json({ msg: `No Customer with the id of ${req.params.id}` });
        }
    });
};

exports.create = (req, res) => {
    const newCustomer = {
        user_id: req.fields.user_id,
    };
    if (!newCustomer.user_id) {
        res.status(400).send({ msg: "Please fill all the fields" });
    }
    customer.create(newCustomer).then((data) => {
        res.send(data);
    });
};

exports.update = (req, res) => {
    let id = req.params.id;
    customer.findByPk(id).then((data) => {
        if (data) {
            data
                .update({
                    user_id: req.fields.user_id,
                })
                .then((data) => {
                    res.send(data);
                });
        } else {
            res.status(404).json({ msg: "Customer not found" });
        }
    });
};

exports.delete = (req, res) => {
    let id = req.params.id;
    customer.findByPk(id).then((data) => {
        if (data) {
            customer
                .destroy({
                    where: {
                        id: id,
                    },
                })
                .then(() => {
                    res.status(200).json({
                        msg: ` Customer  with the id of ${req.params.id} has been deleted `,
                    });
                });
        } else {
            res
                .status(404)
                .json({ msg: `No Customer found with the id of  ${req.params.id}` });
        }
    });
};