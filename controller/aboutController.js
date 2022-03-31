const { about } = require("../models");

exports.all = (req, res) => {
    about.findAll().then((data) => {
        res.send(data);
    });
};

exports.findById = (req, res) => {
    let id = req.params.id;
    about.findByPk(id).then((data) => {
        if (data) {
            res.send(data);
        } else {
            res
                .status(400)
                .json({ msg: `No address with the id of ${req.params.id}` });
        }
    });
};

exports.create = (req, res) => {
    const newAbout = {
        desc_1: req.fields.desc_1,
    };
    if (!newAbout) {
        res.status(400).send({ msg: "Please fill all the fields" });
    }
    about.create(newAbout).then((data) => {
        res.send(data);
    });
};

exports.update = (req, res) => {
    let id = req.params.id;
    about.findByPk(id).then((data) => {
        if (data) {
            data
                .update({
                    desc_1: req.fields.desc_1,
                })
                .then((data) => {
                    res.send(data);
                });
        } else {
            res.status(404).json({ msg: "About not found" });
        }
    });
};

exports.delete = (req, res) => {
    let id = req.params.id;
    about.findByPk(id).then((data) => {
        if (data) {
            about
                .destroy({
                    where: {
                        id: id,
                    },
                })
                .then(() => {
                    res.status(200).json({
                        msg: ` About  with the id of ${req.params.id} has been deleted `,
                    });
                });
        } else {
            res
                .status(404)
                .json({ msg: `No About found with the id of  ${req.params.id}` });
        }
    });
};