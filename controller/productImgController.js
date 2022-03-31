const { product_img } = require("../models");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

exports.all = (req, res) => {
    product_img.findAll().then((data) => {
        res.send(data);
    });
};

exports.findById = (req, res) => {
    let id = req.params.id;
    product_img.findByPk(id).then((data) => {
        if (data) {
            res.send(data);
        } else {
            res
                .status(400)
                .json({ msg: `No Product Image with the id of ${req.params.id}` });
        }
    });
};

exports.create = (req, res) => {
    try {
        if (JSON.stringify(req.files) === "{}") {
            return res.send({ msg: `You must select a file.` });
        }
        let data = fs.readFileSync(req.files.product_img.path);
        let name =
            uuidv4() + "." + req.files.product_img.name.split(".").reverse()[0];
        product_img
            .create({
                product_img: "/static/img/" + name,
                product_id: req.fields.products_id,
            })
            .then((image) => {
                fs.writeFileSync(__dirname + "../../public/images/" + name, data);
                return res.send({ msg: `File has been uploaded.` });
            });
    } catch (error) {
        console.log(error);
        return res.send({
            msg: `Error when trying upload images: ${error}`,
        });
    }
};

exports.update = (req, res) => {
    let id = req.params.id;
    let name =
        uuidv4() + "." + req.files.product_img.name.split(".").reverse()[0];
    product_img;
    product_img.findByPk(id).then((data) => {
        if (data) {
            data
                .update({
                    product_img: "/static/img/" + name,
                    product_id: req.fields.products_id,
                })
                .then((data) => {
                    res.send(data);
                });
        } else {
            res.status(404).json({
                msg: `No Product Image found with the id of  ${req.params.id}`,
            });
        }
    });
};

exports.delete = (req, res) => {
    let id = req.params.id;

    product_img.findByPk(id).then((data) => {
        if (data) {
            product_img
                .destroy({
                    where: {
                        id: id,
                    },
                })
                .then(() => {
                    res.status(200).json({
                        msg: `Product Image with the id of ${req.params.id} has been deleted `,
                    });
                });
        } else {
            res.status(404).json({
                msg: `No Product Image found with the id of  ${req.params.id}`,
            });
        }
    });
};