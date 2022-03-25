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