const { products_price } = require("../models");

exports.all = (req, res) => {
  products_price.findAll().then((data) => {
    res.send(data);
  });
};

exports.findById = (req, res) => {
  let id = req.params.id;
  products_price.findByPk(id).then((data) => {
    if (data) {
      res.send(data);
    } else {
      res
        .status(400)
        .json({ msg: `No ProductPrices with the id of ${req.params.id}` });
    }
  });
};

exports.create = (req, res) => {
  const newProductPrices = {
    harga_jual: req.body.harga_jual,
    products_id: req.body.products_id,
  };
  if (!newProductPrices.harga_jual || !newProductPrices.products_id) {
    res.status(400).send({ msg: "Please fill all the fields" });
  } else {
    products_price.create(newProductPrices).then((data) => {
      res.status(200).json({ msg: "Data has been Created " });
      res.send(data);
    });
  }
};

exports.update = (req, res) => {
  let id = req.params.id;
  products_price.findByPk(id).then((data) => {
    if (data) {
      data
        .update({
          harga_jual: req.body.harga_jual,
          products_id: req.body.products_id,
        })
        .then((data) => {
          res.send(data);
          res.status(200).json({ msg: "Data has been Updated" });
        });
    } else {
      res.status(404).json({ msg: "ProductPrices not found" });
    }
  });
};

exports.delete = (req, res) => {
  let id = req.params.id;
  products_price.findByPk(id).then((data) => {
    if (data) {
      data
        .destroy({
          where: {
            id: id,
          },
        })
        .then(() => {
          res.status(200).json({
            msg: ` ProductPrices with the id of ${req.params.id} has been deleted `,
          });
        });
    } else {
      res.status(404).json({
        msg: `No ProductPrices found with the id of  ${req.params.id}`,
      });
    }
  });
};
