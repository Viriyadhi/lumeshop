const { favorite } = require("../models");

exports.all = (req, res) => {
    favorite.findAll().then((data) => {
        res.send(data);
    });
};

exports.findById = (req, res) => {
    let id = req.params.id;
    favorite.findByPk(id).then((data) => {
        if (data) {
            res.send(data);
        } else {
            res
                .status(400)
                .json({ msg: `No Favorite with the id of ${req.params.id}` });
        }
    });
};

exports.create = (req, res) => {
    const newFavorite = {
        products_id: req.fields.products_id,
    };
    if (!newFavorite.products_id) {
        res.status(400).send({ msg: "Please fill all the fields" });
    }
    favorite.create(newFavorite).then((data) => {
        res.send(data);
    });
};

exports.update = (req, res) => {
    let id = req.params.id;
    favorite.findByPk(id).then((data) => {
        if (data) {
            data
                .update({
                    products_id: req.fields.products_id,
                })
                .then((data) => {
                    res.send(data);
                });
        } else {
            res.status(404).json({ msg: "Favorite not found" });
        }
    });
};

exports.delete = (req, res) => {
    let id = req.params.id;
    favorite.findByPk(id).then((data) => {
        if (data) {
            favorite
                .destroy({
                    where: {
                        id: id,
                    },
                })
                .then(() => {
                    res.status(200).json({
                        msg: ` Favorite  with the id of ${req.params.id} has been deleted `,
                    });
                });
        } else {
            res
                .status(404)
                .json({ msg: `No Favorite found with the id of  ${req.params.id}` });
        }
    });
};