const { products } = require("../models");

exports.all = (req, res) => {
    products.findAll().then((data) => {
        res.send(data);
    });
};

exports.findById = (req, res) => {
    let id = req.params.id;
    products.findByPk(id).then((data) => {
        if (data) {
            res.send(data);
        } else {
            res
                .status(400)
                .json({ msg: `No Product with the id of ${req.params.id}` });
        }
    });
};

exports.create = (req, res) => {
    const newProduct = {
        detail_products: req.fields.detail_products,
        nama_products: req.fields.nama_products,
        category_id: req.fields.category_id,
        stock: req.fields.stock,
        deskripsi: req.fields.deskripsi,
    };
    if (!newProduct.detail_products ||
        !newProduct.nama_products ||
        !newProduct.category_id ||
        !newProduct.stock ||
        !newProduct.deskripsi
    ) {
        res.status(400).send({ msg: "Please fill all the fields" });
    }
    products.create(newProduct).then((data) => {
        res.send(data);
    });
};

exports.update = (req, res) => {
    let id = req.params.id;
    products.findByPk(id).then((data) => {
        if (data) {
            data
                .update({
                    detail_products: req.fields.detail_products,
                    nama_products: req.fields.nama_products,
                    category_id: req.fields.category_id,
                    stock: req.fields.stock,
                    deskripsi: req.fields.deskripsi,
                })
                .then((data) => {
                    res.send(data);
                });
        } else {
            res.status(404).json({ msg: "Cart not found" });
        }
    });
};

exports.delete = (req, res) => {
    let id = req.params.id;
    products.findByPk(id).then((data) => {
        if (data) {
            products
                .destroy({
                    where: {
                        id: id,
                    },
                })
                .then(() => {
                    res.status(200).json({
                        msg: ` Product  with the id of ${req.params.id} has been deleted `,
                    });
                });
        } else {
            res
                .status(404)
                .json({ msg: `No Product found with the id of  ${req.params.id}` });
        }
    });
};