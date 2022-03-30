const { orders } = require("../models");

exports.all = (req, res) => {
  orders.findAll().then((data) => {
    res.send(data);
  });
};

exports.findById = (req, res) => {
  let id = req.params.id;
  orders.findByPk(id).then((data) => {
    if (data) {
      res.send(data);
    } else {
      res
        .status(400)
        .json({ msg: `No orders with the id of ${req.params.id}` });
    }
  });
};

exports.create = (req, res) => {
  const newOrders = {
    jumlah: req.body.jumlah,
    jumlah_harga: req.body.jumlah_harga,
    cart_id: req.body.cart_id,
    user_id: req.body.user_id,
    coins_value: req.body.coins_value,
    shipping_cargos_id: req.body.shipping_cargos_id,
    addresses_id: req.body.addresses_id,
    jenis_pembayaran_id: req.body.jenis_pembayaran_id,
    resi_pengiriman: req.body.resi_pengiriman,
    order_promo_id: req.body.order_promo_id,
  };
  if (
    !newOrders.jumlah ||
    !newOrders.jumlah_harga ||
    !newOrders.cart_id ||
    !newOrders.user_id ||
    !newOrders.coins_value ||
    !newOrders.shipping_cargos_id ||
    !newOrders.addresses_id ||
    !newOrders.jenis_pembayaran_id ||
    !newOrders.resi_pengiriman ||
    !newOrders.order_promo_id
  ) {
    res.status(400).send({ msg: "Please fill all the fields" });
  }
  orders.create(newOrders).then((data) => {
    res.send(data);
  });
};

exports.update = (req, res) => {
  let id = req.params.id;
  orders.findByPk(id).then((data) => {
    if (data) {
      data
        .update({
          jumlah: req.body.jumlah,
          jumlah_harga: req.body.jumlah_harga,
          cart_id: req.body.cart_id,
          user_id: req.body.user_id,
          coins_value: req.body.coins_value,
          shipping_cargos_id: req.body.shipping_cargos_id,
          addresses_id: req.body.addresses_id,
          jenis_pembayaran_id: req.body.jenis_pembayaran_id,
          resi_pengiriman: req.body.resi_pengiriman,
          order_promo_id: req.body.order_promo_id,
        })
        .then((data) => {
          res.send(data);
        });
    } else {
      res.status(404).json({ msg: "orders not found" });
    }
  });
};

exports.delete = (req, res) => {
  let id = req.params.id;
  orders.findByPk(id).then((data) => {
    if (data) {
      orders
        .destroy({
          where: {
            id: id,
          },
        })
        .then(() => {
          res.status(200).json({
            msg: ` orders  with the id of ${req.params.id} has been deleted `,
          });
        });
    } else {
      res
        .status(404)
        .json({ msg: `No orders found with the id of  ${req.params.id}` });
    }
  });
};
