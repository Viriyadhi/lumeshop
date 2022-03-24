const { user } = require("../models");

exports.name = (req, res) => {
    user
        .findAll({
            attributes: ["name"],
            where: {
                id: req.params.id,
            },
        })
        .then((data) => {
            res.send(data);
        });
};

exports.email = (req, res) => {
    user
        .findAll({
            attributes: ["email"],
            where: {
                id: req.params.id,
            },
        })
        .then((data) => {
            res.send(data);
        });
};

exports.password = (req, res) => {
    user
        .findAll({
            attributes: ["password"],
            where: {
                id: req.params.id,
            },
        })
        .then((data) => {
            res.send(data);
        });
};

exports.username = (req, res) => {
    user
        .findAll({
            attributes: ["username"],
            where: {
                id: req.params.id,
            },
        })
        .then((data) => {
            res.send(data);
        });
};

exports.birth_date = (req, res) => {
    user
        .findAll({
            attributes: ["birth_date"],
            where: {
                id: req.params.id,
            },
        })
        .then((data) => {
            res.send(data);
        });
};

exports.phone_number = (req, res) => {
    user
        .findAll({
            attributes: ["phone_number"],
            where: {
                id: req.params.id,
            },
        })
        .then((data) => {
            res.send(data);
        });
};