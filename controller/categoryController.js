const { category } = require("../models");

exports.all = (req, res) => {
    category.findAll().then((data) => {
        res.send(data);
    });
};

exports.findById = (req, res) => {
    let id = req.params.id;
    category.findByPk(id).then((data) => {
        if (data) {
            res.send(data);
        } else {
            res
                .status(400)
                .json({ msg: `No Category with the id of ${req.params.id}` });
        }
    });
};

exports.create = (req, res) => {
    const newCategory = {
        category: req.fields.category,
    };
    if (!newCategory.category) {
        res.status(400).send({ msg: "Please fill all the fields" });
    }
    category.create(newCategory).then((data) => {
        res.send(data);
    });
};

exports.update = (req, res) => {
    let id = req.params.id;
    category.findByPk(id).then((data) => {
        if (data) {
            data
                .update({
                    category: req.fields.category,
                })
                .then((data) => {
                    res.send(data);
                });
        } else {
            res.status(404).json({ msg: "Category not found" });
        }
    });
};

exports.delete = (req, res) => {
    let id = req.params.id;
    category.findByPk(id).then((data) => {
        if (data) {
            category
                .destroy({
                    where: {
                        id: id,
                    },
                })
                .then(() => {
                    res.status(200).json({
                        msg: ` Category  with the id of ${req.params.id} has been deleted `,
                    });
                });
        } else {
            res
                .status(404)
                .json({ msg: `No Category found with the id of  ${req.params.id}` });
        }
    });
};