const { coins } = require("../models");

exports.all = (req, res) => {
    coins.findAll().then((data) => {
        res.send(data);
    });
};

exports.findById = (req, res) => {
    let id = req.params.id;
    coins.findByPk(id).then((data) => {
        if (data) {
            res.send(data);
        } else {
            res.status(400).json({ msg: `No Coins with the id of ${req.params.id}` });
        }
    });
};

exports.create = (req, res) => {
    const newCoins = {
        value_coins: req.fields.value_coins,
        user_id: req.fields.user_id,
    };
    if (!newCoins.user_id) {
        res.status(400).send({ msg: "Please fill all the fields" });
    }
    coins.create(newCoins).then((data) => {
        res.send(data);
    });
};

exports.update = (req, res) => {
    let id = req.params.id;
    coins.findByPk(id).then((data) => {
        if (data) {
            data
                .update({
                    value_coins: req.fields.value_coins,
                    user_id: req.fields.user_id,
                })
                .then((data) => {
                    res.send(data);
                });
        } else {
            res.status(404).json({ msg: "Coins not found" });
        }
    });
};

exports.delete = (req, res) => {
    let id = req.params.id;
    coins.findByPk(id).then((data) => {
        if (data) {
            coins
                .destroy({
                    where: {
                        id: id,
                    },
                })
                .then(() => {
                    res.status(200).json({
                        msg: ` Coins  with the id of ${req.params.id} has been deleted `,
                    });
                });
        } else {
            res
                .status(404)
                .json({ msg: `No Coins found with the id of  ${req.params.id}` });
        }
    });
};