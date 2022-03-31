const { addresses } = require("../models");
const { user } = require("../models");

// exports.provinsi = (req, res) => {
//     addresses
//         .findAll({
//             attributes: ["provinsi"],
//             where: {
//                 id: req.params.id,
//             },
//         })
//         .then((data) => {
//             res.send(data);
//         });
// };

// exports.kota = (req, res) => {
//     addresses
//         .findAll({
//             attributes: ["kota"],
//             where: {
//                 id: req.params.id,
//             },
//         })
//         .then((data) => {
//             res.send(data);
//         });
// };
// exports.kabupaten = (req, res) => {
//     addresses
//         .findAll({
//             attributes: ["kabupaten"],
//             where: {
//                 id: req.params.id,
//             },
//         })
//         .then((data) => {
//             res.send(data);
//         });
// };
// exports.kecamatan = (req, res) => {
//     addresses
//         .findAll({
//             attributes: ["kecamatan"],
//             where: {
//                 id: req.params.id,
//             },
//         })
//         .then((data) => {
//             res.send(data);
//         });
// };
// exports.kelurahan_desa = (req, res) => {
//     addresses.findAll({
//         attributes: ["kelurahan_desa"],
//         where: {
//             id: req.params.id,
//         },
//     });
// };
// exports.jalan = (req, res) => {
//     addresses.findAll({
//         attributes: ["jalan"],
//         where: {
//             id: req.params.id,
//         },
//     });
// };
// exports.kode_pos = (req, res) => {
//     addresses.findAll({
//         attributes: ["kode_pos"],
//         where: {
//             id: req.params.id,
//         },
//     });
// };

// exports.nama_alamat = (req, res) => {
//     addresses
//         .findAll({
//             attributes: ["nama_alamat"],
//             where: {
//                 id: req.params.id,
//             },
//         })
//         .then((data) => {
//             res.send(data);
//         });
// };
// exports.user_id = (req, res) => {
//     addresses
//         .findAll({
//             attributes: ["user_id"],
//             where: {
//                 id: req.params.id,
//             },
//         })
//         .then((data) => {
//             res.send(data);
//         });
// };

exports.all = (req, res) => {
    addresses.findAll().then((data) => {
        res.send(data);
    });
};

exports.findById = (req, res) => {
    let id = req.params.id;
    addresses.findByPk(id).then((data) => {
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
    const newAddresses = {
        provinsi: req.fields.provinsi,
        kota: req.fields.kota,
        kecamatan: req.fields.kecamatan,
        kelurahan_desa: req.fields.kelurahan_desa,
        jalan: req.fields.jalan,
        kode_pos: req.fields.kode_pos,
        nama_alamat: req.fields.nama_alamat,
        user_id: req.fields.user_id,
    };
    if (!newAddresses.provinsi ||
        !newAddresses.kota ||
        !newAddresses.kecamatan ||
        !newAddresses.kelurahan_desa ||
        !newAddresses.jalan ||
        !newAddresses.kode_pos
    ) {
        res.status(400).send({ msg: "Please fill all the fields" });
    }
    addresses.create(newAddresses).then((data) => {
        res.send(data);
    });
};

exports.update = (req, res) => {
    let id = req.params.id;
    addresses.findByPk(id).then((data) => {
        if (data) {
            data
                .update({
                    provinsi: req.fields.provinsi,
                    kota: req.fields.kota,
                    kecamatan: req.fields.kecamatan,
                    kelurahan_desa: req.fields.kelurahan_desa,
                    jalan: req.fields.jalan,
                    kode_pos: req.fields.kode_pos,
                    nama_alamat: req.fields.nama_alamat,
                    user_id: req.fields.user_id,
                })
                .then((data) => {
                    res.send(data);
                });
        } else {
            res.status(404).json({ msg: "Address not found" });
        }
    });
};

exports.delete = (req, res) => {
    let id = req.params.id;
    addresses.findByPk(id).then((data) => {
        if (data) {
            addresses
                .destroy({
                    where: {
                        id: id,
                    },
                })
                .then(() => {
                    res.status(200).json({
                        msg: ` Address  with the id of ${req.params.id} has been deleted `,
                    });
                });
        } else {
            res
                .status(404)
                .json({ msg: `No Address found with the id of  ${req.params.id}` });
        }
    });
};