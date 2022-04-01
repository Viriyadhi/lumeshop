const { reseller } = require("../models");

exports.all = (req, res) => {
    reseller.findAll().then((data) => {
        res.send(data);
    });
};

exports.findById = (req, res) => {
    let id = req.params.id;
    reseller.findByPk(id).then((data) => {
        if (data) {
            res.send(data);
        } else {
            res
                .status(400)
                .json({ msg: `No Reseller with the id of ${req.params.id}` });
        }
    });
};

exports.create = (req, res) => {
    const newReseller = {
        user_id: req.fields.user_id,
        shoppe_link: req.fields.shoppe_link,
        tokped_link: req.fields.tokped_link,
        bukalapak_link: req.fields.bukalapak_link,
    };
    reseller.create(newReseller).then((data) => {
        res.send(data);
    });
};

exports.update = (req, res) => {
    let id = req.params.id;
    reseller.findByPk(id).then((data) => {
        if (data) {
            data
                .update({
                    user_id: req.fields.user_id,
                    shoppe_link: req.fields.shoppe_link,
                    tokped_link: req.fields.tokped_link,
                    bukalapak_link: req.fields.bukalapak_link,
                })
                .then((data) => {
                    res.send(data);
                });
        } else {
            res.status(404).json({ msg: "Reseller not found" });
        }
    });
};

exports.delete = (req, res) => {
    let id = req.params.id;
    reseller.findByPk(id).then((data) => {
        if (data) {
            reseller
                .destroy({
                    where: {
                        id: id,
                    },
                })
                .then(() => {
                    res.status(200).json({
                        msg: ` Reseller  with the id of ${req.params.id} has been deleted `,
                    });
                });
        } else {
            res
                .status(404)
                .json({ msg: `No Reseller found with the id of  ${req.params.id}` });
        }
    });
};