const { FAQ } = require("../models");

exports.all = (req, res) => {
    FAQ.findAll().then((data) => {
        res.send(data);
    });
};

exports.findById = (req, res) => {
    let id = req.params.id;
    FAQ.findByPk(id).then((data) => {
        if (data) {
            res.send(data);
        } else {
            res.status(400).json({ msg: `No FAQ with the id of ${req.params.id}` });
        }
    });
};

exports.create = (req, res) => {
    const newFaq = {
        question: req.fields.question,
        answer: req.fields.answer,
    };
    if (!newFaq.question || !newFaq.answer) {
        res.status(400).send({ msg: "Please fill all the fields" });
    }
    FAQ.create(newFaq).then((data) => {
        res.send(data);
    });
};

exports.update = (req, res) => {
    let id = req.params.id;
    FAQ.findByPk(id).then((data) => {
        if (data) {
            data
                .update({
                    products_id: req.fields.products_id,
                    user_id: req.fields.user_id,
                })
                .then((data) => {
                    res.send(data);
                });
        } else {
            res.status(404).json({ msg: "FAQ not found" });
        }
    });
};

exports.delete = (req, res) => {
    let id = req.params.id;
    FAQ.findByPk(id).then((data) => {
        if (data) {
            FAQ.destroy({
                where: {
                    id: id,
                },
            }).then(() => {
                res.status(200).json({
                    msg: ` FAQ  with the id of ${req.params.id} has been deleted `,
                });
            });
        } else {
            res
                .status(404)
                .json({ msg: `No FAQ found with the id of  ${req.params.id}` });
        }
    });
};